import mechanize
'''
url = "https://www.iciba.com"

br = mechanize.Browser()
br.set_handle_robots(False)
br.open(url)

response = br.submit()

print(br.title())
print response.geturl()
print response.info()
print response.read()
print br.form '''

import netifaces as ni

print(ni.ifaddresses('en0')[ni.AF_INET][0]['addr'])