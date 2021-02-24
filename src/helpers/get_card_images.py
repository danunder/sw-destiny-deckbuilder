import requests
import shutil
import json

card_set = open('../set/EC.json', 'r')

parsed_card_set = json.loads(card_set.read())
for card in parsed_card_set:

  image_url = f"https://swdestinydb.com/bundles/cards/en/701/{card['code']}.jpg"
  filename = image_url.split("/")[-1]

  r = requests.get(image_url, stream = True)

  if r.status_code == 200:
      # Set decode_content value to True, otherwise the downloaded image file's size will be zero.
      r.raw.decode_content = True

      # Open a local file with wb ( write binary ) permission.
      with open(filename,'wb') as f:
          shutil.copyfileobj(r.raw, f)
          
      print('Image sucessfully Downloaded: ',filename)
  else:
      print('Image Couldn\'t be retrieved')