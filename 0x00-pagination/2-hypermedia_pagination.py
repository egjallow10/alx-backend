#!/usr/bin/env python3
""" implemented a Server class to work with data """


import csv
from typing import List
import math


class Server:
    """Server class to paginate a database of popular baby names.
    """
    DATA_FILE = "Popular_Baby_Names.csv"

    def __init__(self):
        self.__dataset = None

    def get_dataset(self) -> List[List]:
        """Cached dataset
        """
        if self.__dataset is None:
            with open(self.DATA_FILE) as f:
                reader = csv.reader(f)
                dataset = [row for row in reader]
            self.__dataset = dataset[1:]

        return self.__dataset

    def index_range(self, page: int, page_size: int) -> tuple:
        """ Rerurns containing page """
        startIndex = (page - 1) * page_size
        endIndex = startIndex + page_size
        return (startIndex, endIndex)

    def get_page(self, page: int = 1, page_size: int = 10) -> List[List]:
        """ get items in a page """
        assert isinstance(page, int) or isinstance(page_size, int)
        assert page > 0 or page_size > 0

        start, end = self.index_range(page, page_size)

        data = self.get_dataset()

        list_result = []

        if start >= len(data):
            return list_result

        return data[start:end]

    def get_hyper(self, page: int, page_size: int) -> dict:
        """ return dictionary of hyper"""
        data = self.get_page(page, page_size)
        size_all_pages = math.ceil(len(self.get_dataset()) / page_size)
        next_page = page + 1 if page + 1 < size_all_pages else None
        prev_page = page - 1 if page > 1 else None

        hyper_data = {
            "page_size": len(data),
            "page": page,
            "data": data,
            "next_page": next_page,
            "prev_page": prev_page,
            "total_pages": size_all_pages,
        }

        return hyper_data
