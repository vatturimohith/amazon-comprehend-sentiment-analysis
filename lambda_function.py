import json
import boto3

comprehend = boto3.client(
    "comprehend",
    region_name="ap-south-1"
)
