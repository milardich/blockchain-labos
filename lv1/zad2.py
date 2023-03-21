import hashlib

input = 'FERIT'.encode('utf-8')

sha256 = hashlib.sha256(input).hexdigest()
print(f"To sha256 -> input: {input} - sha256: {sha256}")
