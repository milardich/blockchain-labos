import base58

input = 'FERIT'

b58 = base58.b58encode(input)
print(
    f'Encoding -> input: {input} - output: {b58.decode("utf-8")}')

decoded = base58.b58decode(b58)
print(
    f'Decoding -> base58: {b58.decode("utf-8")}  - output: {decoded.decode("utf-8")}')
