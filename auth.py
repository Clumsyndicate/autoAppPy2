import requests
import netifaces
import ssl
import urllib
import sys

url = "https://auth.ykpaoschool.cn/portalAuthAction.do"

# Disable ssl cert
try:
    _create_unverified_https_context = ssl._create_unverified_context
except AttributeError:
    # Legacy Python that doesn't verify HTTPS certificates by default
    pass
else:
    # Handle target environment that doesn't support HTTPS verification
    ssl._create_default_https_context = _create_unverified_https_context

 # Obtain URL
mac = netifaces.ifaddresses('en0')[netifaces.AF_LINK][0]['addr']
ip = netifaces.ifaddresses('en0')[netifaces.AF_INET][0]['addr']
part1 = "https://auth.ykpaoschool.cn/portal.do?wlanuserip="
part2 = "&wlanacname=hh1u6p&mac="
part3 = "&vlan=185&url=http://iciba.com/&radnum=530848&rand=5a01a279"
url = part1 + ip + part2 + mac + part3
url = "https://auth.ykpaoschool.cn/portalAuthAction.do"
print(url)

h = {
    "POST": "/portalAuthAction.do HTTP/1.1",
    "Host": "auth.ykpaoschool.cn",
    "Connection": "keep-alive",
    "Content-Length": "645",
    "Cache-Control": "max-age=0",
    "Origin": "https://auth.ykpaoschool.cn",
    "Upgrade-Insecure-Requests": "1",
    "Content-Type": "application/x-www-form-urlencoded",
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_0) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36",
    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
    "Referer": "https://auth.ykpaoschool.cn/portal.do?wlanuserip=10.2.188.12&wlanacname=hh1u6p&mac=f0:18:98:5e:ba:a7&vlan=185&url=http://iciba.com/&radnum=530848&rand=5a01a279",
    "Accept-Encoding": "gzip, deflate, br",
    "Accept-Language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7",
    "Cookie": "_ga=GA1.2.710262873.1479180774; JSESSIONID=6317AD9C18A46D6ECB69F451B499C65E"
}

form = {
    "wlanuserip": ip,
    "wlanacname": "hh1u6p",
    "wlanclp": "192.168.186.2",
    "vlan": "185",
    "mac": mac,
    "version": "0",
    "authkey": "ykpao",
    "url": "http://iciba.com",
    "userid": "",
    "passwd": "",
    "authkey": "ykpao",
    "auth_type": "PAP",
    "version": "0",
    "usertime": "0",
    "listpasscode": "0",
    "listgetpass": "0",
    "getpasstype": "0",
    "randstr": "8437",
}

ip_e = urllib.urlencode({"wlanuserip": ip})
print(ip_e)
mac_e = urllib.urlencode({"mac": mac})
print(mac_e)
'''username = raw_input("Enter your username: ")
password = raw_input("Enter your password: ") '''
username = sys.argv[1]
password = sys.argv[2]
d = ip_e + "&wlanacname=hh1u6p&chal_id=&chal_vector=&auth_type=PAP&seq_id=&req_id=&wlanacIp=192.168.186.2&ssid=&vlan=185&" + mac_e + "&message=&bank_acct=&isCookies=&version=0&authkey=ykpao&url=&usertime=0&listpasscode=0&listgetpass=0&getpasstype=0&randstr=8437&domain=&isRadiusProxy=false&usertype=0&isHaveNotice=0&times=12&weizhi=0&smsid=0&freeuser=&freepasswd=&listwxauth=0&templatetype=1&tname=2&logintype=0&act=&is189=false&terminalType=&checkterminal=true&portalpageid=1&listfreeauth=0&viewlogin=1&userid=" + username + "&twocode=0&alipayappid=&useridtemp=" + username + "&passwd=" + password + "&wxname=&wxuser="

print(d)
session = requests.Session()
s = session.post(url, data=d, verify=False, headers=h)
print(s.text[:300] + '...')
'''
r = requests.post(url, data=d, verify=False, headers=h)
print(r.status_code, r.reason)
print(r.text[:300] + '...')
print(r.headers) '''