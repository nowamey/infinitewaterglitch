from pyspark.sql import SparkSession
from dotenv import load_dotenv

import os

# so i think behind the scenes this takes care of everything for me: Answer: yes it will but dont name the env file lol
configdata = load_dotenv()

print(configdata)


spark = SparkSession.builder.getOrCreate()


textFile = spark.read.text("README.md")

print(textFile)