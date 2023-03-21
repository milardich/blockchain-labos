import base58

input = 'FERIT'

b58 = base58.b58encode(input)
print(
    f'To base58 -> input: {input} - output: {b58.decode("utf-8")}')

decoded = base58.b58decode(b58)
print(
    f'From base58 -> base58: {b58.decode("utf-8")}  - output: {decoded.decode("utf-8")}')
