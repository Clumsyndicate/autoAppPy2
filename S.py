from selenium import webdriver
from selenium.webdriver.common.keys import Keys
import netifaces

# Obtain URL
mac = netifaces.ifaddresses('en0')[netifaces.AF_LINK][0]['addr']
ip = netifaces.ifaddresses('en0')[netifaces.AF_INET][0]['addr']
part1 = "https://auth.ykpaoschool.cn/portal.do?wlanuserip="
part2 = "&wlanacname=hh1u6p&mac="
part3 = "&vlan=185&url=http://iciba.com/&radnum=530848&rand=5a01a279"
url = part1 + ip + part2 + mac + part3
print(url)

driver = webdriver.Chrome()

driver.get(url)

driver.close()