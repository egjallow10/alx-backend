#!/usr/bin/env python3
""" A class that serve data fro csv file"""


import csv
import math
from typing import List, Tuple


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]
        return self.__dataset

    def index_range(page: int, page_size: int) -> Tuple:
        """return a tuple"""
        startInx = (page - 1) * page_size
        endIdx = startInx + page_size
        return (startInx, endIdx)

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """Returns paginated values
        """
        page_list: list = []
        assert isinstance(page, int) and isinstance(page_size, int)
        assert page > 0 and page_size > 0
        try:
            pageIndex: Tuple[int, int] = self.index_range(page, page_size)
            start, end = pageIndex
            page_list = self.dataset()[start:end]
            return page_list
        except IndexError:
            return []
