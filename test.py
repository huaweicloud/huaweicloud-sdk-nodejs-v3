from huaweicloudsdkcore.auth.credentials import BasicCredentials
from huaweicloudsdkcore.exceptions import exceptions
from huaweicloudsdkcore.http.http_config import HttpConfig
# 导入指定云服务的库 huaweicloudsdk{service}
from huaweicloudsdkfunctiongraph.v2 import *


def list_vpc(client):
    try:
        request = ListVpcsRequest(limit=1)
        response = client.list_vpcs(request)
        print(response)
    except exceptions.ClientRequestException as e:
        print(e.status_code)
        print(e.request_id)
        print(e.error_code)
        print(e.error_msg)


if __name__ == "__main__":
    ak = '6T9ZUN0WWK4SDIAWJVOJ'
    sk = 'JeIqadapRve0GAndO29VvuIpE7XdNh59iUKTktkx'
    domainId = '0bbeba4f1080f3560fe8c011e1ec4960'
    project_id = '0bcc05efb100f2a92f53c011f262dfa0'
    endpoint = 'https://functiongraph.cn-north-4.myhuaweicloud.com'

    config = HttpConfig.get_default_config()
    config.ignore_ssl_verification = True
    credentials = BasicCredentials(ak, sk, project_id)


    fg_client = FunctionGraphClient.new_builder() \
        .with_http_config(config) \
        .with_credentials(credentials) \
        .with_endpoint(endpoint) \
        .build()
    fg_client.list_functions(ListFunctionsRequest)