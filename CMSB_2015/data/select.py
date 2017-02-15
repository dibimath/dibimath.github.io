import shutil
import errno

from tempfile import mkstemp
from shutil import move
from os import remove, close
import re
import json

def read_json(filename):
    with open(filename, "r") as file:
        data = file.read()
        return json.loads(data)

def write_json(filename, data):
    with open(filename, "w") as file:
        file.seek(0)
        file.write(json.dumps(data))
		
data = read_json('properties.json')

count = 0
for record in data['records']:
	if record['name'][-3:] == '_ms': # and record['name'][-2:] != '_m' and record['name'][-3:] != '_ms':
		record['select'] = True
		count += 1
	else:
		record['select'] = False
		
print(count)

write_json('properties.json', data)