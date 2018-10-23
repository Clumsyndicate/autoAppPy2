function setMD5Passwd() {
	var isvalid = document.getElementById("listpasscode").value; //�Ƿ��ȡ��֤��
	var isRadiusProxy = document.getElementById("isRadiusProxy").value; //�Ƿ�RADIUS����
	var domainRadiusProxy = ""; //RADIUS��������
	var ssid = document.getElementById("ssid").value; //ssid
	var wlanacname = document.getElementById("wlanacname").value; //wlanacname
	var vlan = document.getElementById("vlan").value; //wlanacname
	var usertype = document.getElementById("usertype").value; //usertype

	var useridtemp = "";
	if(act!="CONNECT"){
		useridtemp = document.getElementById("useridtemp").value;
		document.portalForm.userid.value=useridtemp;
	}

	/**var useridtemp = document.portalForm.useridtemp.value;
	document.portalForm.userid.value = useridtemp;**/

	var userid = document.portalForm.userid.value;
	var isok = 1; //�Ƿ�ȫ�����û���⡣1��ʾ�ɹ���0��ʾ����
	var isHaveNotice = document.getElementById("isHaveNotice").value; //�ж��Ƿ�Ҫ��ʾ���
	var weizhi = document.getElementById("weizhi").value; //�ж���ʾ��λ�ã�0��������ʾ��1���ύ��֤��ʾ

	var act = document.getElementById("act").value; //�жϵ�ǰҳ��״̬���ձ�ʾ��½״̬��CONNECT��ʾ�޸�֪��½״̬
	var templatetype = document.getElementById("templatetype").value; //�жϵ�ǰ�ն�ģʽ��1�ǵ��ԣ�2���ֻ�
	var tname = document.getElementById("tname").value; //ģ����1��2��3��4
	var is189 = document.getElementById("is189").value; //�����жϵ�ǰ��ƽ̨�Ƿ��ǵ��ŵģ����Ϊtrue,�ǵ���,

	if (templatetype == "2" && tname!=""&&(tname=="0"||tname=="1"||tname=="2"||tname=="3"||tname=="4")) {
		//��½ǰ�������ǰ���ֻ���ģ��ʱ����Ҫ�ж��Ķ�����
		if (act == "" || act == "CONNECT") {
			//��֤ǰ�����ߵڶ�����֤����ʾ�Ķ�����
			var isread = document.getElementById("read").checked;
			//alert("document.getElementById(read).value="+document.getElementById("read").checked);
			if (!isread) {
				//alert("�빴ѡ�Ķ�����");
				alert(lang.isread);
				return false;
			}

		}
	}

	var usertype_value = ""; //����ֵ
	var logintype = document.getElementById("logintype").value; //��ȡ��ǰ���ĸ���֤��0��ʾ�˺���֤��1��ʾ΢����֤
	/**
	var ltype=document.getElementsByName("logtype");
	//alert(ltype.length);
	for(var i=0;i<ltype.length;i++){
		 if(ltype[i].checked){
			 logintype=ltype[i].value; 
		 }
	}
**/
	//alert(logintype);

	if (logintype == "1") {
		//΢�ŵ�½
		var wxuser = document.getElementById("wxuser").value;
		if (wxuser == "") {
			//alert("��������������");
			alert(lang.wxuser);
			document.getElementById("wxuser").focus();
			return false;
		} else {
			document.getElementById("userid").value = document.getElementById("wxuser").value;
			document.getElementById("bank_acct").value = "weixin";
		}
	} else {

		if (trim(usertype) != "") {
			//usertype:�����ʺŹ���[0-�ֻ���,1-�ֻ���_SSID,2-�ֻ���_VLAN,3-�ֻ���_wlanacname]
			if (usertype == "1") {
				usertype_value = ssid;
			} else if (usertype == "2") {
				usertype_value = vlan;
			} else if (usertype == "3") {
				usertype_value = wlanacname;
			}
		}
		if (act != "CONNECT") {
			//��ǰ״̬���޸�֪��֤״̬��ʱ�򣬲���Ҫ�ж���Щ
			//alert("document.portalForm.useridtemp.value="+document.portalForm.useridtemp.value);
			if (document.portalForm.useridtemp.value == "" || document.portalForm.useridtemp.value == " ") {
				alert(lang.userid);

				// document.portalForm.useridtemp.focus();
				isok = isok * 0;
				return false;
			} else {
				if (trim(usertype_value) != "") {
					userid = useridtemp + "_" + usertype_value;
				} else {
					userid = useridtemp;
				}
			}
		} else {
			if (userid == "" || userid == " ") {
				alert(lang.userid);
				isok = isok * 0;
				return false;
			}
		}

		

		if (userid.length > 32) {
			//alert("�û��˺ų��ȳ�������");
			alert(lang.useridlen);
			return false;
		}

		if (document.portalForm.passwd.value == "") {
			//alert("�û����벻����Ϊ��");
			alert(lang.passwd);
			document.portalForm.passwd.focus();
			isok = isok * 0;
			return false;
		}

		if (isvalid == "1" && act != "CONNECT") {
			var validcode = document.getElementById("randstr").value; //��̨����������֤��
			var inputvaliecode = document.getElementById("validateCode").value;
			//alert("inputvaliecode="+inputvaliecode);
			//alert("validcode="+validcode);
			if (inputvaliecode == "") {
				//alert("��������֤�룡");
				alert(lang.validcode);
				document.getElementById("validateCode").focus();
				isok = isok * 0;
				return false;
			} else {
				if (inputvaliecode != validcode) {
					//alert("��֤�����벻��ȷ�����������룡");
					alert(lang.validcode_notnull);
					document.getElementById("validateCode").focus();
					document.getElementById("validateCode").value = "";
					isok = isok * 0;
					return false;
				}
			}
		}


		//alert("userid="+userid);
		if (userid != null && userid != "" && userid != " ") {

			document.portalForm.userid.value = userid;
			if (is189 == "true") {

				//����ǵ��Ų����ֻ��жϣ�������ֻ�189��ͷ�ģ����üӺ�׺
				var tempstr = document.portalForm.userid.value;
				var domain = document.getElementById("domain").value; //����
				if (tempstr.indexOf("@") == -1) {
					//����˺�û������@�ַ�
					if (tempstr.length == 11) {
						if (tempstr.substr(0, 3) != "189" && tempstr.substr(0, 3) != "133" && tempstr.substr(0, 3) != "153" && tempstr.substr(0, 3) != "180" && tempstr.substr(0, 3) != "181" && tempstr.substr(0, 3) != "020") {
							document.portalForm.userid.value = tempstr + "@" + domain;
						} else {
							//��189��ͷ�����������ֵģ�ҲҪ��
							if (isNaN(tempstr)) {
								//����������
								document.portalForm.userid.value = tempstr + "@" + domain;
							}
						}

					} else {

						if (tempstr.substr(0, 3) != "020") {
							document.portalForm.userid.value = tempstr + "@" + domain;
						}

						//document.portalForm.userid.value=tempstr+"@"+domain;
					}
				}

			} else {

				//sƥ��@�Ƿ����
				var isdomain = "0"; //�Ƿ���Ҫƥ��

				var nowdomain = ""; //��ȡ��ǰ����ֵ
				var domain = document.getElementById("domain").value; //����
				if (isRadiusProxy == "true") {
					domainRadiusProxy = document.getElementById("radiusDomain").value;
					nowdomain = domainRadiusProxy;
				} else {

					nowdomain = domain;

				}

				if (nowdomain != "" && trim(nowdomain).length > 0) {
					var s = userid.indexOf(nowdomain);
					if (s == -1) {
						//˵��û���������룬ֱ����ĩβ���Ӽ���
						document.portalForm.userid.value = userid + nowdomain;
					} else {
						//������ڣ�����ƥ�䣬���������Ƿ�ƥ��
						var s2 = userid.indexOf(nowdomain);
						if (s2 == -1) {
							//-1˵��������ƥ��
							//alert("�˺����������ϣ�����������");
							alert(lang.domain);
							// document.portalForm.useridtemp.focus();
							isok = isok * 0;
							return false;
						}

					}
				}
			}
		} else {
			alert(lang.userid);
			return false;
		}



	}
	//alert("ccccccccc");
	return true;

}


