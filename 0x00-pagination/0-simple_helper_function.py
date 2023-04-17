#!/usr/bin/env python3
""" Function """


from typing import Tuple


def index_range(page: int, page_size: int) -> Tuple:
    """return a tuple"""
    startInx = (page - 1) * page_size
    endIdx = startInx + page_size
    return (startInx, endIdx)
