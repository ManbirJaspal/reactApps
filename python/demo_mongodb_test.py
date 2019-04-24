import pymongo
from pymongo import MongoClient
client = pymongo.MongoClient('mongodb://localhost:27017/')
db = client.test_database
