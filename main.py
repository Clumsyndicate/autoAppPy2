import re
import mechanize
import sys
from uuid import getnode as get_mac
import netifaces
import ssl


def main():

    # Obtain URL
    mac = netifaces.ifaddresses('en0')[netifaces.AF_LINK][0]['addr']
    ip = netifaces.ifaddresses('en0')[netifaces.AF_INET][0]['addr']
    part1 = "https://auth.ykpaoschool.cn/portal.do?wlanuserip="
    part2 = "&wlanacname=hh1u6p&mac="
    part3 = "&vlan=185&url=http://iciba.com/&radnum=530848&rand=5a01a279"
    url = part1 + ip + part2 + mac + part3
    print(url)

    # Disable ssl cert
    try:
        _create_unverified_https_context = ssl._create_unverified_context
    except AttributeError:
        # Legacy Python that doesn't verify HTTPS certificates by default
        pass
    else:
        # Handle target environment that doesn't support HTTPS verification
        ssl._create_default_https_context = _create_unverified_https_context
    
    # Access webpage
    br = mechanize.Browser()
    # Allow robot
    br.set_handle_robots(False)
    br.set_handle_redirect(mechanize.HTTPRedirectHandler)
    try:
        r = br.open(url)
    except:
        print("Error!")
    #  print(r.read())
    userid = ''
    password = ''
    for form in br.forms():
        print "+1"
    br.select_form(name="portalForm")


    br.form["useridtemp"] = userid
    br.form["passwd"] = password
    print(br.forms())

    response = br.submit()
    f = open('page.txt', 'w')
    if len(sys.argv) >1 and sys.argv[1] == '-v':
        print(br.title())
        print(response.geturl())
        print(response.info())
        print(response.read())
        print(br.forms())
        f.write(br.title())
    
    f.close()

if __name__ == "__main__":
    main()