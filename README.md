# autoAppPy2

autoPy2 uses netifaces library to detect mac address and ip address of the host computer, encode form information and header to send a http request that automatically logs YK Pao students into the school wifi. The code could be adapted to other purposes.

## Dependencies

'''
import requests
import netifaces
import ssl
import urllib
import sys
'''

## Adoptation

To determine the necessary form data and header used in the request, use Chrome inspector>Network to check which address the request is sent to and what are the form data and header. 

## Tutorial

The program takes two arguments, username and password, as a interface for passing user information from [my swift application](https://github.com/Clumsyndicate/AutoAuth) to this python executable. To embed this code into a swift program or other unix-based programs, use [pyinstalle](https://www.pyinstaller.org/). 
