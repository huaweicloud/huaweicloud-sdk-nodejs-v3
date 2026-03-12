import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { BatchCreateCaTagsRequest } from './model/BatchCreateCaTagsRequest';
import { BatchCreateCaTagsResponse } from './model/BatchCreateCaTagsResponse';
import { BatchCreateCertTagsRequest } from './model/BatchCreateCertTagsRequest';
import { BatchCreateCertTagsResponse } from './model/BatchCreateCertTagsResponse';
import { BatchDeleteCaTagsRequest } from './model/BatchDeleteCaTagsRequest';
import { BatchDeleteCaTagsResponse } from './model/BatchDeleteCaTagsResponse';
import { BatchDeleteCertTagsRequest } from './model/BatchDeleteCertTagsRequest';
import { BatchDeleteCertTagsResponse } from './model/BatchDeleteCertTagsResponse';
import { BatchOperateTagRequestBody } from './model/BatchOperateTagRequestBody';
import { CertDistinguishedName } from './model/CertDistinguishedName';
import { CertificateAuthorities } from './model/CertificateAuthorities';
import { Certificates } from './model/Certificates';
import { CountCaResourceInstancesRequest } from './model/CountCaResourceInstancesRequest';
import { CountCaResourceInstancesResponse } from './model/CountCaResourceInstancesResponse';
import { CountCertResourceInstancesRequest } from './model/CountCertResourceInstancesRequest';
import { CountCertResourceInstancesResponse } from './model/CountCertResourceInstancesResponse';
import { CreateAgencyRequest } from './model/CreateAgencyRequest';
import { CreateAgencyResponse } from './model/CreateAgencyResponse';
import { CreateCaTagRequest } from './model/CreateCaTagRequest';
import { CreateCaTagResponse } from './model/CreateCaTagResponse';
import { CreateCertTagRequest } from './model/CreateCertTagRequest';
import { CreateCertTagResponse } from './model/CreateCertTagResponse';
import { CreateCertificateAuthorityObsAgencyRequest } from './model/CreateCertificateAuthorityObsAgencyRequest';
import { CreateCertificateAuthorityObsAgencyResponse } from './model/CreateCertificateAuthorityObsAgencyResponse';
import { CreateCertificateAuthorityOrderRequest } from './model/CreateCertificateAuthorityOrderRequest';
import { CreateCertificateAuthorityOrderRequestBody } from './model/CreateCertificateAuthorityOrderRequestBody';
import { CreateCertificateAuthorityOrderResponse } from './model/CreateCertificateAuthorityOrderResponse';
import { CreateCertificateAuthorityRequest } from './model/CreateCertificateAuthorityRequest';
import { CreateCertificateAuthorityRequestBody } from './model/CreateCertificateAuthorityRequestBody';
import { CreateCertificateAuthorityResponse } from './model/CreateCertificateAuthorityResponse';
import { CreateCertificateByCsrRequest } from './model/CreateCertificateByCsrRequest';
import { CreateCertificateByCsrRequestBody } from './model/CreateCertificateByCsrRequestBody';
import { CreateCertificateByCsrResponse } from './model/CreateCertificateByCsrResponse';
import { CreateCertificateRequest } from './model/CreateCertificateRequest';
import { CreateCertificateRequestBody } from './model/CreateCertificateRequestBody';
import { CreateCertificateResponse } from './model/CreateCertificateResponse';
import { CrlConfiguration } from './model/CrlConfiguration';
import { CustomizedExtension } from './model/CustomizedExtension';
import { DeleteCertificateAuthorityRequest } from './model/DeleteCertificateAuthorityRequest';
import { DeleteCertificateAuthorityResponse } from './model/DeleteCertificateAuthorityResponse';
import { DeleteCertificateRequest } from './model/DeleteCertificateRequest';
import { DeleteCertificateResponse } from './model/DeleteCertificateResponse';
import { DisableCertificateAuthorityCrlRequest } from './model/DisableCertificateAuthorityCrlRequest';
import { DisableCertificateAuthorityCrlResponse } from './model/DisableCertificateAuthorityCrlResponse';
import { DisableCertificateAuthorityRequest } from './model/DisableCertificateAuthorityRequest';
import { DisableCertificateAuthorityResponse } from './model/DisableCertificateAuthorityResponse';
import { DistinguishedName } from './model/DistinguishedName';
import { DomainTags } from './model/DomainTags';
import { EnableCertificateAuthorityCrlRequest } from './model/EnableCertificateAuthorityCrlRequest';
import { EnableCertificateAuthorityCrlRequestBody } from './model/EnableCertificateAuthorityCrlRequestBody';
import { EnableCertificateAuthorityCrlResponse } from './model/EnableCertificateAuthorityCrlResponse';
import { EnableCertificateAuthorityRequest } from './model/EnableCertificateAuthorityRequest';
import { EnableCertificateAuthorityResponse } from './model/EnableCertificateAuthorityResponse';
import { EncCertInfo } from './model/EncCertInfo';
import { ExportCertificateAuthorityCertificateRequest } from './model/ExportCertificateAuthorityCertificateRequest';
import { ExportCertificateAuthorityCertificateResponse } from './model/ExportCertificateAuthorityCertificateResponse';
import { ExportCertificateAuthorityCsrRequest } from './model/ExportCertificateAuthorityCsrRequest';
import { ExportCertificateAuthorityCsrResponse } from './model/ExportCertificateAuthorityCsrResponse';
import { ExportCertificateRequest } from './model/ExportCertificateRequest';
import { ExportCertificateRequestBody } from './model/ExportCertificateRequestBody';
import { ExportCertificateResponse } from './model/ExportCertificateResponse';
import { ExtendedKeyUsage } from './model/ExtendedKeyUsage';
import { HsmClusterInfo } from './model/HsmClusterInfo';
import { ImportCertificateAuthorityCertificateRequest } from './model/ImportCertificateAuthorityCertificateRequest';
import { ImportCertificateAuthorityCertificateRequestBody } from './model/ImportCertificateAuthorityCertificateRequestBody';
import { ImportCertificateAuthorityCertificateResponse } from './model/ImportCertificateAuthorityCertificateResponse';
import { IssueCertificateAuthorityCertificateRequest } from './model/IssueCertificateAuthorityCertificateRequest';
import { IssueCertificateAuthorityCertificateRequestBody } from './model/IssueCertificateAuthorityCertificateRequestBody';
import { IssueCertificateAuthorityCertificateResponse } from './model/IssueCertificateAuthorityCertificateResponse';
import { ListCaResourceInstancesRequest } from './model/ListCaResourceInstancesRequest';
import { ListCaResourceInstancesResponse } from './model/ListCaResourceInstancesResponse';
import { ListCaTagsRequest } from './model/ListCaTagsRequest';
import { ListCaTagsResponse } from './model/ListCaTagsResponse';
import { ListCertResourceInstancesRequest } from './model/ListCertResourceInstancesRequest';
import { ListCertResourceInstancesResponse } from './model/ListCertResourceInstancesResponse';
import { ListCertTagsRequest } from './model/ListCertTagsRequest';
import { ListCertTagsResponse } from './model/ListCertTagsResponse';
import { ListCertificateAuthorityObsBucketRequest } from './model/ListCertificateAuthorityObsBucketRequest';
import { ListCertificateAuthorityObsBucketResponse } from './model/ListCertificateAuthorityObsBucketResponse';
import { ListCertificateAuthorityRequest } from './model/ListCertificateAuthorityRequest';
import { ListCertificateAuthorityResponse } from './model/ListCertificateAuthorityResponse';
import { ListCertificateRequest } from './model/ListCertificateRequest';
import { ListCertificateResponse } from './model/ListCertificateResponse';
import { ListCrlConfiguration } from './model/ListCrlConfiguration';
import { ListDomainCaTagsRequest } from './model/ListDomainCaTagsRequest';
import { ListDomainCaTagsResponse } from './model/ListDomainCaTagsResponse';
import { ListDomainCertTagsRequest } from './model/ListDomainCertTagsRequest';
import { ListDomainCertTagsResponse } from './model/ListDomainCertTagsResponse';
import { ListResourceInstancesRequestBody } from './model/ListResourceInstancesRequestBody';
import { ObsBuckets } from './model/ObsBuckets';
import { ParseCertificateSigningRequestRequest } from './model/ParseCertificateSigningRequestRequest';
import { ParseCertificateSigningRequestRequestBody } from './model/ParseCertificateSigningRequestRequestBody';
import { ParseCertificateSigningRequestResponse } from './model/ParseCertificateSigningRequestResponse';
import { ProductInfo } from './model/ProductInfo';
import { Quotas } from './model/Quotas';
import { ResourceTag } from './model/ResourceTag';
import { ResourceTagRequestBody } from './model/ResourceTagRequestBody';
import { Resources } from './model/Resources';
import { RestoreCertificateAuthorityRequest } from './model/RestoreCertificateAuthorityRequest';
import { RestoreCertificateAuthorityResponse } from './model/RestoreCertificateAuthorityResponse';
import { RevokeCertificateAuthorityRequest } from './model/RevokeCertificateAuthorityRequest';
import { RevokeCertificateAuthorityResponse } from './model/RevokeCertificateAuthorityResponse';
import { RevokeCertificateRequest } from './model/RevokeCertificateRequest';
import { RevokeCertificateRequestBody } from './model/RevokeCertificateRequestBody';
import { RevokeCertificateResponse } from './model/RevokeCertificateResponse';
import { ShowAgencyRequest } from './model/ShowAgencyRequest';
import { ShowAgencyResponse } from './model/ShowAgencyResponse';
import { ShowCertificateAuthorityObsAgencyRequest } from './model/ShowCertificateAuthorityObsAgencyRequest';
import { ShowCertificateAuthorityObsAgencyResponse } from './model/ShowCertificateAuthorityObsAgencyResponse';
import { ShowCertificateAuthorityQuotaRequest } from './model/ShowCertificateAuthorityQuotaRequest';
import { ShowCertificateAuthorityQuotaResponse } from './model/ShowCertificateAuthorityQuotaResponse';
import { ShowCertificateAuthorityRequest } from './model/ShowCertificateAuthorityRequest';
import { ShowCertificateAuthorityResponse } from './model/ShowCertificateAuthorityResponse';
import { ShowCertificateQuotaRequest } from './model/ShowCertificateQuotaRequest';
import { ShowCertificateQuotaResponse } from './model/ShowCertificateQuotaResponse';
import { ShowCertificateRequest } from './model/ShowCertificateRequest';
import { ShowCertificateResponse } from './model/ShowCertificateResponse';
import { ShowConsoleConfigRequest } from './model/ShowConsoleConfigRequest';
import { ShowConsoleConfigResponse } from './model/ShowConsoleConfigResponse';
import { SubjectAlternativeName } from './model/SubjectAlternativeName';
import { TagResource } from './model/TagResource';
import { UpdateOcspSwitchRequest } from './model/UpdateOcspSwitchRequest';
import { UpdateOcspSwitchRequestBody } from './model/UpdateOcspSwitchRequestBody';
import { UpdateOcspSwitchResponse } from './model/UpdateOcspSwitchResponse';
import { Validity } from './model/Validity';

export class CcmClient {
    public static newBuilder(): ClientBuilder<CcmClient> {
            let client = new ClientBuilder<CcmClient>(newClient);
            return client;
    }

    private hcClient: HcClient;
    public constructor(client: HcClient) {
        this.hcClient = client;
    }

    public getPath() {
        return __dirname;
    }


    /**
     * 批量创建CA标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量创建CA标签
     * @param {string} caId 所需要批量创建标签的CA证书ID。
     * @param {BatchOperateTagRequestBody} batchCreateCaTagsRequestBody BatchCreateCaTagsRequestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchCreateCaTags(batchCreateCaTagsRequest?: BatchCreateCaTagsRequest): Promise<BatchCreateCaTagsResponse> {
        const options = ParamCreater().batchCreateCaTags(batchCreateCaTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量创建证书标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量创建证书标签
     * @param {string} certificateId 所需要批量创建标签的证书ID。
     * @param {BatchOperateTagRequestBody} batchCreateCertTagsRequestBody BatchCreateCertTagsRequestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchCreateCertTags(batchCreateCertTagsRequest?: BatchCreateCertTagsRequest): Promise<BatchCreateCertTagsResponse> {
        const options = ParamCreater().batchCreateCertTags(batchCreateCertTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量删除CA标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除CA标签
     * @param {string} caId 所需要批量删除标签的CA证书ID。
     * @param {BatchOperateTagRequestBody} batchDeleteCaTagsRequestBody BatchDeleteCaTagsRequestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteCaTags(batchDeleteCaTagsRequest?: BatchDeleteCaTagsRequest): Promise<BatchDeleteCaTagsResponse> {
        const options = ParamCreater().batchDeleteCaTags(batchDeleteCaTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量删除证书标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量删除证书标签
     * @param {string} certificateId 所需要批量删除标签的证书ID。
     * @param {BatchOperateTagRequestBody} batchDeleteCertTagsRequestBody BatchDeleteCertTagsRequestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchDeleteCertTags(batchDeleteCertTagsRequest?: BatchDeleteCertTagsRequest): Promise<BatchDeleteCertTagsResponse> {
        const options = ParamCreater().batchDeleteCertTags(batchDeleteCertTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据标签查询CA数量。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据标签查询CA数量
     * @param {ListResourceInstancesRequestBody} countCaResourceInstancesRequestBody CountCaResourceInstancesRequestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public countCaResourceInstances(countCaResourceInstancesRequest?: CountCaResourceInstancesRequest): Promise<CountCaResourceInstancesResponse> {
        const options = ParamCreater().countCaResourceInstances(countCaResourceInstancesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据标签查询证书数量。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据标签查询证书数量
     * @param {ListResourceInstancesRequestBody} countCertResourceInstancesRequestBody CountCertResourceInstancesRequestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public countCertResourceInstances(countCertResourceInstancesRequest?: CountCertResourceInstancesRequest): Promise<CountCertResourceInstancesResponse> {
        const options = ParamCreater().countCertResourceInstances(countCertResourceInstancesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 用户授权PCA创建服务委托，用于访问OBS桶，更新吊销列表。
     * &gt; 用户所使用账号token需要具备安全管理员（secu_admin）权限。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建服务委托
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createAgency(createAgencyRequest?: CreateAgencyRequest): Promise<CreateAgencyResponse> {
        const options = ParamCreater().createAgency();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建CA标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建CA标签
     * @param {string} caId 所需要创建标签的CA证书ID。
     * @param {ResourceTagRequestBody} createCaTagRequestBody CreateCaTagRequestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createCaTag(createCaTagRequest?: CreateCaTagRequest): Promise<CreateCaTagResponse> {
        const options = ParamCreater().createCaTag(createCaTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建证书标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建证书标签
     * @param {string} certificateId 所需要创建标签的证书ID。
     * @param {ResourceTagRequestBody} createCertTagRequestBody CreateCertTagRequestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createCertTag(createCertTagRequest?: CreateCertTagRequest): Promise<CreateCertTagResponse> {
        const options = ParamCreater().createCertTag(createCertTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 申请证书。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 申请证书
     * @param {CreateCertificateRequestBody} createCertificateRequestBody CreateCertificateRequestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createCertificate(createCertificateRequest?: CreateCertificateRequest): Promise<CreateCertificateResponse> {
        const options = ParamCreater().createCertificate(createCertificateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 用户给PCA创建OBS委托授权，用于访问OBS桶，更新吊销列表。
     * &gt; 用户所使用账号token需要具备安全管理员（secu_admin）权限。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建委托
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createCertificateAuthorityObsAgency(createCertificateAuthorityObsAgencyRequest?: CreateCertificateAuthorityObsAgencyRequest): Promise<CreateCertificateAuthorityObsAgencyResponse> {
        const options = ParamCreater().createCertificateAuthorityObsAgency();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 购买CA。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 购买CA
     * @param {CreateCertificateAuthorityOrderRequestBody} createCertificateAuthorityOrderRequestBody CreateCertificateAuthorityOrderRequestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createCertificateAuthorityOrder(createCertificateAuthorityOrderRequest?: CreateCertificateAuthorityOrderRequest): Promise<CreateCertificateAuthorityOrderResponse> {
        const options = ParamCreater().createCertificateAuthorityOrder(createCertificateAuthorityOrderRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 通过CSR签发证书。功能约束如下：
     * - 1、当前默认参数如下：
     *   - CA 默认参数：
     *       - **keyUsage**: digitalSignature, keyCertSign, cRLSign，优先采用CSR中的参数；
     *       - **SignatureHashAlgorithm**: SHA384；
     *       - **PathLength**：0 （可自定义）。
     *   - 私有证书：
     *       - **keyUsage**: digitalSignature keyAgreement，优先采用CSR中的参数；
     *       - **SignatureHashAlgorithm**: SHA384；
     * - 2、当传入的type为**INTERMEDIATE_CA**时，创建出的从属CA证书，有以下限制：
     *   - 不占用CA配额。在查询CA列表时，不会返回该证书；
     *   - 只支持通过以下两个接口获取其信息：
     *       - GET /v1/private-certificate-authorities/{ca_id} 获取证书详情
     *       - POST /v1/private-certificate-authorities/{ca_id}/export 导出证书
     *   - 本接口返回的**certificate_id**即代表从属CA的**ca_id**；
     *   - 无法用于签发证书，密钥在用户侧。
     * - 3、当type为**ENTITY_CERT**时，创建出的私有证书，有以下特点：
     *   - 占用私有证书配额。在查询私有证书列表时，会返回该证书；
     *   - 除了导出时不包含密钥信息（密钥在用户端），其余用法与其它私有证书一致。
     * &gt; 注：需要使用“\\r\\n”或“\\n”代替换行符，将CSR转换成一串字符，可参考示例请求。注：目前，证书的组织信息、公钥算法以及公钥内容等均来自CSR文件，暂不支持API传入。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 通过CSR签发证书
     * @param {CreateCertificateByCsrRequestBody} createCertificateByCsrRequestBody CreateCertificateByCsrRequestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createCertificateByCsr(createCertificateByCsrRequest?: CreateCertificateByCsrRequest): Promise<CreateCertificateByCsrResponse> {
        const options = ParamCreater().createCertificateByCsr(createCertificateByCsrRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除证书。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除证书
     * @param {string} certificateId 所要删除的私有证书ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteCertificate(deleteCertificateRequest?: DeleteCertificateRequest): Promise<DeleteCertificateResponse> {
        const options = ParamCreater().deleteCertificate(deleteCertificateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 禁用当前CA的CRL。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 禁用CRL
     * @param {string} caId 所要禁用CRL的CA证书ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public disableCertificateAuthorityCrl(disableCertificateAuthorityCrlRequest?: DisableCertificateAuthorityCrlRequest): Promise<DisableCertificateAuthorityCrlResponse> {
        const options = ParamCreater().disableCertificateAuthorityCrl(disableCertificateAuthorityCrlRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 启用当前CA的CRL。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 启用CRL
     * @param {string} caId 所要启用CRL的CA证书ID。
     * @param {EnableCertificateAuthorityCrlRequestBody} enableCertificateAuthorityCrlRequestBody EnableCertificateAuthorityCrlRequestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public enableCertificateAuthorityCrl(enableCertificateAuthorityCrlRequest?: EnableCertificateAuthorityCrlRequest): Promise<EnableCertificateAuthorityCrlResponse> {
        const options = ParamCreater().enableCertificateAuthorityCrl(enableCertificateAuthorityCrlRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 导出证书。
     *   - 国际算法
     *     - 选择是否压缩时，分以下两种情况：
     *       - is_compressed为true时，返回文件压缩包，命名为：证书名称_type字段小写字母.zip，如”test_apache.zip“。
     *         - 系统生成密钥签发证书
     *           - type &#x3D; \&quot;**APACHE**\&quot;时，压缩包中包含三个文件：**server.key**（密钥文件，内容为PEM格式，若导出证书时设置密码，则为加密后的私钥）、**chain.crt**（证书链，内容为PEM格式）、**server.crt**（证书，内容为PEM格式）；
     *           - type &#x3D; \&quot;**IIS**\&quot;时，压缩包中包含两个文件：**keystorePass.txt**（keystore口令，若导出证书时设置密码，则无此密码文件）、**server.pfx**（PFX证书，证书与证书链包含在同一个文件）；
     *           - type &#x3D; \&quot;**NGINX**\&quot;时，压缩包中包含两个文件：**server.key**（密钥文件，内容为PEM格式，若导出证书时设置密码，则为加密后的私钥）、**server.crt**（内容为PEM格式，证书与证书链包含在同一个文件）；
     *           - type &#x3D; \&quot;**TOMCAT**\&quot;时，压缩包中包含两个文件：**keystorePass.txt**（keystore口令，若导出证书时设置密码，则无此密码文件）、**server.jks**（JKX证书，证书与证书链包含在同一个文件）；
     *           - type &#x3D; \&quot;**OTHER**\&quot;时，压缩包中包含三个文件：**server.key**（密钥文件，内容为PEM格式，若导出证书时设置密码，则为加密后的私钥）、**chain.pem**（证书链）、**server.pem**（证书）。
     *         - 导入CSR签发证书
     *           - type &#x3D; \&quot;**APACHE**\&quot;或\&quot;**IIS**\&quot;或\&quot;**TOMCAT**\&quot;时，压缩包中包含两个文件：**chain.crt**（证书链，内容为PEM格式）、**server.crt**（证书，内容为PEM格式）；
     *           - type &#x3D; \&quot;**NGINX**\&quot;时，压缩包中包含一个文件：**server.crt**（证书，内容为PEM格式）；
     *           - type &#x3D; \&quot;**OTHER**\&quot;时，压缩包中包含两个文件：**chain.pem**（证书链，内容为PEM格式）、**cert.pem**（证书，内容为PEM格式）。
     *       - is_compressed为false时，返回json格式，返回的具体参数如下：
     *         - 系统生成密钥签发证书
     *           - type &#x3D; \&quot;**APACHE**\&quot;或\&quot;**NGINX**\&quot;或\&quot;**OTHER**\&quot;时，返回参数如下：
     *             - **certificate**（证书内容，PEM格式）；
     *             - **certificate_chain**（证书链，PEM格式）；
     *             - **private_key**（证书私钥，PEM格式，若导出证书时设置密码，则为加密后的私钥）；
     *           - type &#x3D; \&quot;**IIS**\&quot;或\&quot;**TOMCAT**\&quot;时，暂时未定义。
     *         - 导入CSR签发证书
     *           - type &#x3D; \&quot;**APACHE**\&quot;或\&quot;**NGINX**\&quot;或\&quot;**IIS**\&quot;或\&quot;**TOMCAT**\&quot;或\&quot;**OTHER**\&quot;时，返回参数如下：
     *             - **certificate**（证书内容，PEM格式）；
     *             - **certificate_chain**（证书链，PEM格式）；
     *   - 国密算法（中国站）
     *     - 选择是否压缩和是否国密标准时，分以下四种情况：
     *       - is_compressed为true、is_sm_standard为true时，返回文件压缩包，命名为：证书名称_type字段小写字母.zip，如”test_apache.zip“。
     *         - 系统生成密钥签发证书
     *           - type &#x3D; \&quot;**APACHE**\&quot;或\&quot;**IIS**\&quot;或\&quot;**NGINX**\&quot;或\&quot;**TOMCAT**\&quot;时，暂时未定义；
     *           - type &#x3D; \&quot;**OTHER**\&quot;时，压缩包中包含六个文件：**chain.pem**（证书链，内容为PEM格式）、**signCert.key**（签名证书密钥文件，内容为PEM格式，若导出证书时设置密码，则为加密后的私钥）、**signCert.pem**（签名证书，内容为PEM格式）、**encSm2EnvelopedKey.key**（加密证书的国密GMT0009标准规范数字信封文件，内容为BASE64编码）、**signedAndEnvelopedData.key**（加密证书的国密GMT0010标准规范数字信封文件，内容为BASE64编码）、**encCert.pem**（加密证书，内容为PEM格式）。
     *         - 导入CSR签发证书
     *           - type &#x3D; \&quot;**APACHE**\&quot;或\&quot;**IIS**\&quot;或\&quot;**NGINX**\&quot;或\&quot;**TOMCAT**\&quot;时，暂时未定义；
     *           - type &#x3D; \&quot;**OTHER**\&quot;时，压缩包中包含五个文件：**chain.pem**（证书链，内容为PEM格式）、**signCert.pem**（签名证书，内容为PEM格式）、**encSm2EnvelopedKey.key**（加密证书的国密GMT0009标准规范数字信封文件，内容为BASE64编码）、**signedAndEnvelopedData.key**（加密证书的国密GMT0010标准规范数字信封文件，内容为BASE64编码）、**encCert.pem**（加密证书，内容为PEM格式）。
     *       - is_compressed为true、is_sm_standard为false时，返回文件压缩包，命名为：证书名称_type字段小写字母.zip，如”test_apache.zip“。
     *         - 系统生成密钥签发证书
     *           - type &#x3D; \&quot;**APACHE**\&quot;或\&quot;**IIS**\&quot;或\&quot;**NGINX**\&quot;或\&quot;**TOMCAT**\&quot;时，暂时未定义；
     *           - type &#x3D; \&quot;**OTHER**\&quot;时，压缩包中包含五个文件：**chain.pem**（证书链，内容为PEM格式）、**signCert.key**（签名证书密钥文件，内容为PEM格式，若导出证书时设置密码，则为加密后的私钥）、**signCert.pem**（签名证书，内容为PEM格式）、**encCert.key**（加密证书密钥文件，内容为PEM格式，若导出证书时设置密码，则为加密后的私钥）、**encCert.pem**（加密证书，内容为PEM格式）。
     *         - 导入CSR签发证书
     *           - type &#x3D; \&quot;**APACHE**\&quot;或\&quot;**IIS**\&quot;或\&quot;**NGINX**\&quot;或\&quot;**TOMCAT**\&quot;时，暂时未定义；
     *           - type &#x3D; \&quot;**OTHER**\&quot;时，压缩包中包含四个文件：**chain.pem**（证书链，内容为PEM格式）、**signCert.pem**（签名证书，内容为PEM格式）、**encCert.key**（加密证书密钥文件，内容为PEM格式）、**encCert.pem**（加密证书，内容为PEM格式）。
     *       - is_compressed为false、is_sm_standard为true时，返回json格式，返回的具体参数如下：
     *         - 系统生成密钥签发证书
     *           - type &#x3D; \&quot;**APACHE**\&quot;或\&quot;**IIS**\&quot;或\&quot;**NGINX**\&quot;或\&quot;**TOMCAT**\&quot;时，暂时未定义；
     *           - type &#x3D; \&quot;**OTHER**\&quot;时，返回参数如下：
     *             - **certificate_chain**（证书链，PEM格式）；
     *             - **certificate**（签名证书内容，PEM格式）；
     *             - **private_key**（签名证书私钥，PEM格式，若导出证书时设置密码，则为加密后的私钥）；
     *             - **enc_certificate**（加密证书内容，PEM格式）；
     *             - **enc_sm2_enveloped_key**（加密证书的国密GMT0009标准规范数字信封文件，BASE64编码）；
     *             - **signed_and_enveloped_data**（加密证书的国密GMT0010标准规范数字信封文件，BASE64编码）。
     *         - 导入CSR签发证书
     *           - type &#x3D; \&quot;**APACHE**\&quot;或\&quot;**IIS**\&quot;或\&quot;**NGINX**\&quot;或\&quot;**TOMCAT**\&quot;时，暂时未定义；
     *           - type &#x3D; \&quot;**OTHER**\&quot;时，返回参数如下：
     *             - **certificate_chain**（证书链，PEM格式）；
     *             - **certificate**（签名证书内容，PEM格式）；
     *             - **enc_certificate**（加密证书内容，PEM格式）；
     *             - **enc_sm2_enveloped_key**（加密证书的国密GMT0009标准规范数字信封文件，BASE64编码）；
     *             - **signed_and_enveloped_data**（加密证书的国密GMT0010标准规范数字信封文件，BASE64编码）。
     *       - is_compressed为false、is_sm_standard为false时，返回json格式，返回的具体参数如下：
     *         - 系统生成密钥签发证书
     *           - type &#x3D; \&quot;**APACHE**\&quot;或\&quot;**IIS**\&quot;或\&quot;**NGINX**\&quot;或\&quot;**TOMCAT**\&quot;时，暂时未定义；
     *           - type &#x3D; \&quot;**OTHER**\&quot;时，返回参数如下：
     *             - **certificate_chain**（证书链，PEM格式）；
     *             - **certificate**（签名证书内容，PEM格式）；
     *             - **private_key**（签名证书私钥，PEM格式，若导出证书时设置密码，则为加密后的私钥）；
     *             - **enc_certificate**（加密证书内容，PEM格式）；
     *             - **enc_private_key**（加密证书私钥，PEM格式，若导出证书时设置密码，则为加密后的私钥）。
     *         - 导入CSR签发证书
     *           - type &#x3D; \&quot;**APACHE**\&quot;或\&quot;**IIS**\&quot;或\&quot;**NGINX**\&quot;或\&quot;**TOMCAT**\&quot;时，暂时未定义；
     *           - type &#x3D; \&quot;**OTHER**\&quot;时，返回参数如下：
     *             - **certificate_chain**（证书链，PEM格式）；
     *             - **certificate**（签名证书内容，PEM格式）；
     *             - **enc_certificate**（加密证书内容，PEM格式）；
     *             - **enc_private_key**（加密证书私钥，PEM格式）。
     * &gt; 只有当证书状态为“已签发”时，可进行导出操作。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 导出证书
     * @param {string} certificateId 所要导出的私有证书ID。
     * @param {ExportCertificateRequestBody} exportCertificateRequestBody ExportCertificateRequestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public exportCertificate(exportCertificateRequest?: ExportCertificateRequest): Promise<ExportCertificateResponse> {
        const options = ParamCreater().exportCertificate(exportCertificateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据标签查询CA列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据标签查询CA列表
     * @param {ListResourceInstancesRequestBody} listCaResourceInstancesRequestBody ListCaResourceInstancesRequestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listCaResourceInstances(listCaResourceInstancesRequest?: ListCaResourceInstancesRequest): Promise<ListCaResourceInstancesResponse> {
        const options = ParamCreater().listCaResourceInstances(listCaResourceInstancesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据CA证书ID查询此CA的标签列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据CA查询标签列表
     * @param {string} caId 所需要查询标签列表的CA证书ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listCaTags(listCaTagsRequest?: ListCaTagsRequest): Promise<ListCaTagsResponse> {
        const options = ParamCreater().listCaTags(listCaTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据标签查询证书列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据标签查询证书列表
     * @param {ListResourceInstancesRequestBody} listCertResourceInstancesRequestBody ListCertResourceInstancesRequestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listCertResourceInstances(listCertResourceInstancesRequest?: ListCertResourceInstancesRequest): Promise<ListCertResourceInstancesResponse> {
        const options = ParamCreater().listCertResourceInstances(listCertResourceInstancesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据证书ID查询此证书的标签列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据证书查询标签列表
     * @param {string} certificateId 所需要查询标签列表的证书ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listCertTags(listCertTagsRequest?: ListCertTagsRequest): Promise<ListCertTagsResponse> {
        const options = ParamCreater().listCertTags(listCertTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询私有证书列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询私有证书列表
     * @param {number} [limit] 指定查询返回记录条数，默认值10。
     * @param {string} [name] 私有证书名称，返回名称带有name字段的证书集合。
     * @param {number} [offset] 索引位置，从offset指定的下一条数据开始查询。
     * @param {string} [status] 私有证书状态，通过状态过滤证书集合。   - **ISSUED** : 已签发；   - **REVOKED** : 已吊销；   - **EXPIRED** : 已过期。
     * @param {string} [sortKey] 排序属性，目前支持以下属性： - **create_time** : 证书创建时间（默认） - **common_name** : 证书名称 - **issuer_name** : 签发CA名称 - **not_after** : 证书到期时间
     * @param {string} [sortDir] 排序方向，支持以下值：   - **DESC** : 降序（默认）   - **ASC** : 升序
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listCertificate(listCertificateRequest?: ListCertificateRequest): Promise<ListCertificateResponse> {
        const options = ParamCreater().listCertificate(listCertificateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询OBS桶列表。
     * &gt; 只有用户创建了委托授权，方可使用此接口。创建委托授权参见本文档：**证书吊销处理&gt;创建委托**。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询OBS桶列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listCertificateAuthorityObsBucket(listCertificateAuthorityObsBucketRequest?: ListCertificateAuthorityObsBucketRequest): Promise<ListCertificateAuthorityObsBucketResponse> {
        const options = ParamCreater().listCertificateAuthorityObsBucket();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询所有CA标签列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询所有CA标签列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDomainCaTags(listDomainCaTagsRequest?: ListDomainCaTagsRequest): Promise<ListDomainCaTagsResponse> {
        const options = ParamCreater().listDomainCaTags();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询所有证书标签列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询所有证书标签列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDomainCertTags(listDomainCertTagsRequest?: ListDomainCertTagsRequest): Promise<ListDomainCertTagsResponse> {
        const options = ParamCreater().listDomainCertTags();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 解析CSR。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 解析CSR
     * @param {ParseCertificateSigningRequestRequestBody} parseCertificateSigningRequestRequestBody ParseCertificateSigningRequestRequestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public parseCertificateSigningRequest(parseCertificateSigningRequestRequest?: ParseCertificateSigningRequestRequest): Promise<ParseCertificateSigningRequestResponse> {
        const options = ParamCreater().parseCertificateSigningRequest(parseCertificateSigningRequestRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 吊销证书。
     * &gt; 注：当不想填写吊销理由时，请求body体请置为\&quot;**{}**\&quot;，否则将会报错。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 吊销证书
     * @param {string} certificateId 所要吊销的私有证书ID。
     * @param {RevokeCertificateRequestBody} revokeCertificateRequestBody RevokeCertificateRequestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public revokeCertificate(revokeCertificateRequest?: RevokeCertificateRequest): Promise<RevokeCertificateResponse> {
        const options = ParamCreater().revokeCertificate(revokeCertificateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查看是否有服务委托。
     * &gt; 用户所使用账号token需要具备安全管理员（secu_admin）权限。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看是否有服务委托
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAgency(showAgencyRequest?: ShowAgencyRequest): Promise<ShowAgencyResponse> {
        const options = ParamCreater().showAgency();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询证书详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询证书详情
     * @param {string} certificateId 需要查询的私有证书ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showCertificate(showCertificateRequest?: ShowCertificateRequest): Promise<ShowCertificateResponse> {
        const options = ParamCreater().showCertificate(showCertificateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查看是否具有委托权限。
     * &gt; 用户所使用账号token需要具备安全管理员（secu_admin）权限。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查看是否具有委托权限
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showCertificateAuthorityObsAgency(showCertificateAuthorityObsAgencyRequest?: ShowCertificateAuthorityObsAgencyRequest): Promise<ShowCertificateAuthorityObsAgencyResponse> {
        const options = ParamCreater().showCertificateAuthorityObsAgency();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询私有证书配额。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询私有证书配额
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showCertificateQuota(showCertificateQuotaRequest?: ShowCertificateQuotaRequest): Promise<ShowCertificateQuotaResponse> {
        const options = ParamCreater().showCertificateQuota();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询局点支持特性。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询局点支持特性
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showConsoleConfig(showConsoleConfigRequest?: ShowConsoleConfigRequest): Promise<ShowConsoleConfigResponse> {
        const options = ParamCreater().showConsoleConfig();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建CA，分以下三种情况：
     * - 创建根CA，根据参数介绍中，填写必选值；
     * - 创建从属CA，并需要直接激活该证书，根据参数介绍中，填写必选值；
     * - 创建从属CA，不需要直接激活该证书，请求body中只需要缺少此三个参数之一即可：issuer_id、signature_algorithm、validity。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建CA
     * @param {CreateCertificateAuthorityRequestBody} createCertificateAuthorityRequestBody CreateCertificateAuthorityRequestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createCertificateAuthority(createCertificateAuthorityRequest?: CreateCertificateAuthorityRequest): Promise<CreateCertificateAuthorityResponse> {
        const options = ParamCreater().createCertificateAuthority(createCertificateAuthorityRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 计划删除CA。计划多少天后删除CA证书，可设置7天～30天内删除。
     * &gt; 只有当证书状态为”待激活“或”已禁用“状态时，才可删除。”待激活“状态下，将会立即删除证书，不支持延迟删除。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除CA
     * @param {string} caId 所要计划删除的CA证书ID。
     * @param {string} pendingDays 延迟删除时间，单位为”天“。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteCertificateAuthority(deleteCertificateAuthorityRequest?: DeleteCertificateAuthorityRequest): Promise<DeleteCertificateAuthorityResponse> {
        const options = ParamCreater().deleteCertificateAuthority(deleteCertificateAuthorityRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 禁用CA。
     * &gt; 只有当证书处于\&quot;已激活\&quot;或\&quot;已过期\&quot;状态时，可进行禁用操作。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 禁用CA
     * @param {string} caId 所要禁用CA证书ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public disableCertificateAuthority(disableCertificateAuthorityRequest?: DisableCertificateAuthorityRequest): Promise<DisableCertificateAuthorityResponse> {
        const options = ParamCreater().disableCertificateAuthority(disableCertificateAuthorityRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 启用CA。
     * &gt; 注：只有当证书处于\&quot;已禁用\&quot;状态时，可进行启用操作。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 启用CA
     * @param {string} caId 所要启用的CA证书ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public enableCertificateAuthority(enableCertificateAuthorityRequest?: EnableCertificateAuthorityRequest): Promise<EnableCertificateAuthorityResponse> {
        const options = ParamCreater().enableCertificateAuthority(enableCertificateAuthorityRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 导出CA证书。
     * &gt; 注：只有当证书处于\&quot;已激活\&quot;或\&quot;已过期\&quot;时，可进行导出操作。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 导出CA证书
     * @param {string} caId 所要导出的CA证书ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public exportCertificateAuthorityCertificate(exportCertificateAuthorityCertificateRequest?: ExportCertificateAuthorityCertificateRequest): Promise<ExportCertificateAuthorityCertificateResponse> {
        const options = ParamCreater().exportCertificateAuthorityCertificate(exportCertificateAuthorityCertificateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 导出CA的证书签名请求。
     * &gt; 只有当CA处于\&quot;待激活\&quot;状态时，可导出证书签名请求。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 导出CA的证书签名请求（CSR）
     * @param {string} caId 未激活的从属CA证书ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public exportCertificateAuthorityCsr(exportCertificateAuthorityCsrRequest?: ExportCertificateAuthorityCsrRequest): Promise<ExportCertificateAuthorityCsrResponse> {
        const options = ParamCreater().exportCertificateAuthorityCsr(exportCertificateAuthorityCsrRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 导入CA证书，使用本接口需要满足以下条件：
     *   - （1）证书为“待激活”状态的从属CA；
     *   - （2）导入的证书体必须满足以下条件：
     *       - a、该证书被签发时的证书签名请求必须是从PCA系统中导出；
     *       - b、其证书链虽然允许不上传，但后期若想要导出完整的证书链，应导入完整的证书链；
     *       - c、证书体与证书链必须为PEM编码。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 导入CA证书
     * @param {string} caId 所要导入的CA证书ID。
     * @param {ImportCertificateAuthorityCertificateRequestBody} importCertificateAuthorityCertificateRequestBody ImportCertificateAuthorityCertificateRequestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public importCertificateAuthorityCertificate(importCertificateAuthorityCertificateRequest?: ImportCertificateAuthorityCertificateRequest): Promise<ImportCertificateAuthorityCertificateResponse> {
        const options = ParamCreater().importCertificateAuthorityCertificate(importCertificateAuthorityCertificateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 激活CA。
     * &gt; 只有当证书处于\&quot;待激活\&quot;状态时，可进行激活操作。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 激活CA
     * @param {string} caId 所要激活的从属CA证书ID。
     * @param {IssueCertificateAuthorityCertificateRequestBody} issueCertificateAuthorityCertificateRequestBody IssueCertificateAuthorityCertificateRequestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public issueCertificateAuthorityCertificate(issueCertificateAuthorityCertificateRequest?: IssueCertificateAuthorityCertificateRequest): Promise<IssueCertificateAuthorityCertificateResponse> {
        const options = ParamCreater().issueCertificateAuthorityCertificate(issueCertificateAuthorityCertificateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询CA列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询CA列表
     * @param {number} [limit] 指定查询返回记录条数，默认值10。
     * @param {string} [name] CA证书名称（CN）过滤值，用于获取名称中带有特定值的CA证书集合。
     * @param {number} [offset] 索引位置，从offset指定的下一条数据开始查询。默认值为0。
     * @param {string} [status] CA证书状态，通过状态过滤证书集合： - **PENDING** : 待激活，此状态下，不可用于签发证书； - **ACTIVED** : 已激活，此状态下，可用于签发证书； - **DISABLED** : 已禁用，此状态下，不可用于签发证书； - **DELETED** : 计划删除，此状态下，不可用于签发证书； - **EXPIRED** : 已过期，此状态下，不可用于签发证书。
     * @param {string} [type] CA证书类型： - **ROOT** : 根CA证书 - **SUBORDINATE** : 从属CA证书
     * @param {string} [sortKey] 排序属性，目前支持以下属性： - **create_time** : 证书创建时间（默认） - **common_name** : 证书名称 - **type** : CA证书类型 - **not_after** : 证书到期时间
     * @param {string} [sortDir] 排序方向，支持以下值： - **DESC** : 降序（默认） - **ASC** : 升序
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listCertificateAuthority(listCertificateAuthorityRequest?: ListCertificateAuthorityRequest): Promise<ListCertificateAuthorityResponse> {
        const options = ParamCreater().listCertificateAuthority(listCertificateAuthorityRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 恢复CA，将处于“计划删除”状态的CA证书，重新恢复为“已禁用”状态。
     * &gt; 注：只有处于“计划删除”状态的CA证书，才可进行恢复操作。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 恢复CA
     * @param {string} caId 所需要恢复的CA证书ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public restoreCertificateAuthority(restoreCertificateAuthorityRequest?: RestoreCertificateAuthorityRequest): Promise<RestoreCertificateAuthorityResponse> {
        const options = ParamCreater().restoreCertificateAuthority(restoreCertificateAuthorityRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 吊销子CA。
     * &gt; 注：当不想填写吊销理由时，请求body体请置为\&quot;**{}**\&quot;，否则将会报错。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 吊销CA
     * @param {string} caId 所要吊销的子CA ID。
     * @param {RevokeCertificateRequestBody} revokeCertificateAuthorityRequestBody RevokeCertificateAuthorityRequestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public revokeCertificateAuthority(revokeCertificateAuthorityRequest?: RevokeCertificateAuthorityRequest): Promise<RevokeCertificateAuthorityResponse> {
        const options = ParamCreater().revokeCertificateAuthority(revokeCertificateAuthorityRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询CA详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询CA详情
     * @param {string} caId CA证书ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showCertificateAuthority(showCertificateAuthorityRequest?: ShowCertificateAuthorityRequest): Promise<ShowCertificateAuthorityResponse> {
        const options = ParamCreater().showCertificateAuthority(showCertificateAuthorityRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询CA证书配额。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询CA配额
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showCertificateAuthorityQuota(showCertificateAuthorityQuotaRequest?: ShowCertificateAuthorityQuotaRequest): Promise<ShowCertificateAuthorityQuotaResponse> {
        const options = ParamCreater().showCertificateAuthorityQuota();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 启用或禁用当前CA的OCSP。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新OCSP开关
     * @param {string} caId 所要启用OCSP的CA证书ID。
     * @param {UpdateOcspSwitchRequestBody} updateOcspSwitchRequestBody UpdateOcspSwitchRequestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateOcspSwitch(updateOcspSwitchRequest?: UpdateOcspSwitchRequest): Promise<UpdateOcspSwitchResponse> {
        const options = ParamCreater().updateOcspSwitch(updateOcspSwitchRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 批量创建CA标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchCreateCaTags(batchCreateCaTagsRequest?: BatchCreateCaTagsRequest) {
            const options = {
                method: "POST",
                url: "/v1/private-certificate-authorities/{ca_id}/tags/create",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let caId;

            if (batchCreateCaTagsRequest !== null && batchCreateCaTagsRequest !== undefined) {
                if (batchCreateCaTagsRequest instanceof BatchCreateCaTagsRequest) {
                    caId = batchCreateCaTagsRequest.caId;
                    body = batchCreateCaTagsRequest.body
                } else {
                    caId = batchCreateCaTagsRequest['ca_id'];
                    body = batchCreateCaTagsRequest['body'];
                }
            }

        
            if (caId === null || caId === undefined) {
            throw new RequiredError('caId','Required parameter caId was null or undefined when calling batchCreateCaTags.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'ca_id': caId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量创建证书标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchCreateCertTags(batchCreateCertTagsRequest?: BatchCreateCertTagsRequest) {
            const options = {
                method: "POST",
                url: "/v1/private-certificates/{certificate_id}/tags/create",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let certificateId;

            if (batchCreateCertTagsRequest !== null && batchCreateCertTagsRequest !== undefined) {
                if (batchCreateCertTagsRequest instanceof BatchCreateCertTagsRequest) {
                    certificateId = batchCreateCertTagsRequest.certificateId;
                    body = batchCreateCertTagsRequest.body
                } else {
                    certificateId = batchCreateCertTagsRequest['certificate_id'];
                    body = batchCreateCertTagsRequest['body'];
                }
            }

        
            if (certificateId === null || certificateId === undefined) {
            throw new RequiredError('certificateId','Required parameter certificateId was null or undefined when calling batchCreateCertTags.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'certificate_id': certificateId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量删除CA标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteCaTags(batchDeleteCaTagsRequest?: BatchDeleteCaTagsRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/private-certificate-authorities/{ca_id}/tags/delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let caId;

            if (batchDeleteCaTagsRequest !== null && batchDeleteCaTagsRequest !== undefined) {
                if (batchDeleteCaTagsRequest instanceof BatchDeleteCaTagsRequest) {
                    caId = batchDeleteCaTagsRequest.caId;
                    body = batchDeleteCaTagsRequest.body
                } else {
                    caId = batchDeleteCaTagsRequest['ca_id'];
                    body = batchDeleteCaTagsRequest['body'];
                }
            }

        
            if (caId === null || caId === undefined) {
            throw new RequiredError('caId','Required parameter caId was null or undefined when calling batchDeleteCaTags.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'ca_id': caId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量删除证书标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchDeleteCertTags(batchDeleteCertTagsRequest?: BatchDeleteCertTagsRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/private-certificates/{certificate_id}/tags/delete",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let certificateId;

            if (batchDeleteCertTagsRequest !== null && batchDeleteCertTagsRequest !== undefined) {
                if (batchDeleteCertTagsRequest instanceof BatchDeleteCertTagsRequest) {
                    certificateId = batchDeleteCertTagsRequest.certificateId;
                    body = batchDeleteCertTagsRequest.body
                } else {
                    certificateId = batchDeleteCertTagsRequest['certificate_id'];
                    body = batchDeleteCertTagsRequest['body'];
                }
            }

        
            if (certificateId === null || certificateId === undefined) {
            throw new RequiredError('certificateId','Required parameter certificateId was null or undefined when calling batchDeleteCertTags.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'certificate_id': certificateId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据标签查询CA数量。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        countCaResourceInstances(countCaResourceInstancesRequest?: CountCaResourceInstancesRequest) {
            const options = {
                method: "POST",
                url: "/v1/private-certificate-authorities/resource-instances/count",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (countCaResourceInstancesRequest !== null && countCaResourceInstancesRequest !== undefined) {
                if (countCaResourceInstancesRequest instanceof CountCaResourceInstancesRequest) {
                    body = countCaResourceInstancesRequest.body
                } else {
                    body = countCaResourceInstancesRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据标签查询证书数量。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        countCertResourceInstances(countCertResourceInstancesRequest?: CountCertResourceInstancesRequest) {
            const options = {
                method: "POST",
                url: "/v1/private-certificates/resource-instances/count",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (countCertResourceInstancesRequest !== null && countCertResourceInstancesRequest !== undefined) {
                if (countCertResourceInstancesRequest instanceof CountCertResourceInstancesRequest) {
                    body = countCertResourceInstancesRequest.body
                } else {
                    body = countCertResourceInstancesRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 用户授权PCA创建服务委托，用于访问OBS桶，更新吊销列表。
         * &gt; 用户所使用账号token需要具备安全管理员（secu_admin）权限。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createAgency() {
            const options = {
                method: "POST",
                url: "/v1/private-certificate-authorities/agencies",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;


            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建CA标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createCaTag(createCaTagRequest?: CreateCaTagRequest) {
            const options = {
                method: "POST",
                url: "/v1/private-certificate-authorities/{ca_id}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let caId;

            if (createCaTagRequest !== null && createCaTagRequest !== undefined) {
                if (createCaTagRequest instanceof CreateCaTagRequest) {
                    caId = createCaTagRequest.caId;
                    body = createCaTagRequest.body
                } else {
                    caId = createCaTagRequest['ca_id'];
                    body = createCaTagRequest['body'];
                }
            }

        
            if (caId === null || caId === undefined) {
            throw new RequiredError('caId','Required parameter caId was null or undefined when calling createCaTag.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'ca_id': caId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建证书标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createCertTag(createCertTagRequest?: CreateCertTagRequest) {
            const options = {
                method: "POST",
                url: "/v1/private-certificates/{certificate_id}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let certificateId;

            if (createCertTagRequest !== null && createCertTagRequest !== undefined) {
                if (createCertTagRequest instanceof CreateCertTagRequest) {
                    certificateId = createCertTagRequest.certificateId;
                    body = createCertTagRequest.body
                } else {
                    certificateId = createCertTagRequest['certificate_id'];
                    body = createCertTagRequest['body'];
                }
            }

        
            if (certificateId === null || certificateId === undefined) {
            throw new RequiredError('certificateId','Required parameter certificateId was null or undefined when calling createCertTag.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'certificate_id': certificateId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 申请证书。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createCertificate(createCertificateRequest?: CreateCertificateRequest) {
            const options = {
                method: "POST",
                url: "/v1/private-certificates",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createCertificateRequest !== null && createCertificateRequest !== undefined) {
                if (createCertificateRequest instanceof CreateCertificateRequest) {
                    body = createCertificateRequest.body
                } else {
                    body = createCertificateRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 用户给PCA创建OBS委托授权，用于访问OBS桶，更新吊销列表。
         * &gt; 用户所使用账号token需要具备安全管理员（secu_admin）权限。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createCertificateAuthorityObsAgency() {
            const options = {
                method: "POST",
                url: "/v1/private-certificate-authorities/obs/agencies",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;


            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 购买CA。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createCertificateAuthorityOrder(createCertificateAuthorityOrderRequest?: CreateCertificateAuthorityOrderRequest) {
            const options = {
                method: "POST",
                url: "/v1/private-certificate-authorities/order",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createCertificateAuthorityOrderRequest !== null && createCertificateAuthorityOrderRequest !== undefined) {
                if (createCertificateAuthorityOrderRequest instanceof CreateCertificateAuthorityOrderRequest) {
                    body = createCertificateAuthorityOrderRequest.body
                } else {
                    body = createCertificateAuthorityOrderRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 通过CSR签发证书。功能约束如下：
         * - 1、当前默认参数如下：
         *   - CA 默认参数：
         *       - **keyUsage**: digitalSignature, keyCertSign, cRLSign，优先采用CSR中的参数；
         *       - **SignatureHashAlgorithm**: SHA384；
         *       - **PathLength**：0 （可自定义）。
         *   - 私有证书：
         *       - **keyUsage**: digitalSignature keyAgreement，优先采用CSR中的参数；
         *       - **SignatureHashAlgorithm**: SHA384；
         * - 2、当传入的type为**INTERMEDIATE_CA**时，创建出的从属CA证书，有以下限制：
         *   - 不占用CA配额。在查询CA列表时，不会返回该证书；
         *   - 只支持通过以下两个接口获取其信息：
         *       - GET /v1/private-certificate-authorities/{ca_id} 获取证书详情
         *       - POST /v1/private-certificate-authorities/{ca_id}/export 导出证书
         *   - 本接口返回的**certificate_id**即代表从属CA的**ca_id**；
         *   - 无法用于签发证书，密钥在用户侧。
         * - 3、当type为**ENTITY_CERT**时，创建出的私有证书，有以下特点：
         *   - 占用私有证书配额。在查询私有证书列表时，会返回该证书；
         *   - 除了导出时不包含密钥信息（密钥在用户端），其余用法与其它私有证书一致。
         * &gt; 注：需要使用“\\r\\n”或“\\n”代替换行符，将CSR转换成一串字符，可参考示例请求。注：目前，证书的组织信息、公钥算法以及公钥内容等均来自CSR文件，暂不支持API传入。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createCertificateByCsr(createCertificateByCsrRequest?: CreateCertificateByCsrRequest) {
            const options = {
                method: "POST",
                url: "/v1/private-certificates/csr",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createCertificateByCsrRequest !== null && createCertificateByCsrRequest !== undefined) {
                if (createCertificateByCsrRequest instanceof CreateCertificateByCsrRequest) {
                    body = createCertificateByCsrRequest.body
                } else {
                    body = createCertificateByCsrRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除证书。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteCertificate(deleteCertificateRequest?: DeleteCertificateRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/private-certificates/{certificate_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let certificateId;

            if (deleteCertificateRequest !== null && deleteCertificateRequest !== undefined) {
                if (deleteCertificateRequest instanceof DeleteCertificateRequest) {
                    certificateId = deleteCertificateRequest.certificateId;
                } else {
                    certificateId = deleteCertificateRequest['certificate_id'];
                }
            }

        
            if (certificateId === null || certificateId === undefined) {
            throw new RequiredError('certificateId','Required parameter certificateId was null or undefined when calling deleteCertificate.');
            }

            options.pathParams = { 'certificate_id': certificateId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 禁用当前CA的CRL。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        disableCertificateAuthorityCrl(disableCertificateAuthorityCrlRequest?: DisableCertificateAuthorityCrlRequest) {
            const options = {
                method: "POST",
                url: "/v1/private-certificate-authorities/{ca_id}/crl/disable",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let caId;

            if (disableCertificateAuthorityCrlRequest !== null && disableCertificateAuthorityCrlRequest !== undefined) {
                if (disableCertificateAuthorityCrlRequest instanceof DisableCertificateAuthorityCrlRequest) {
                    caId = disableCertificateAuthorityCrlRequest.caId;
                } else {
                    caId = disableCertificateAuthorityCrlRequest['ca_id'];
                }
            }

        
            if (caId === null || caId === undefined) {
            throw new RequiredError('caId','Required parameter caId was null or undefined when calling disableCertificateAuthorityCrl.');
            }

            options.pathParams = { 'ca_id': caId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 启用当前CA的CRL。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        enableCertificateAuthorityCrl(enableCertificateAuthorityCrlRequest?: EnableCertificateAuthorityCrlRequest) {
            const options = {
                method: "POST",
                url: "/v1/private-certificate-authorities/{ca_id}/crl/enable",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let caId;

            if (enableCertificateAuthorityCrlRequest !== null && enableCertificateAuthorityCrlRequest !== undefined) {
                if (enableCertificateAuthorityCrlRequest instanceof EnableCertificateAuthorityCrlRequest) {
                    caId = enableCertificateAuthorityCrlRequest.caId;
                    body = enableCertificateAuthorityCrlRequest.body
                } else {
                    caId = enableCertificateAuthorityCrlRequest['ca_id'];
                    body = enableCertificateAuthorityCrlRequest['body'];
                }
            }

        
            if (caId === null || caId === undefined) {
            throw new RequiredError('caId','Required parameter caId was null or undefined when calling enableCertificateAuthorityCrl.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'ca_id': caId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 导出证书。
         *   - 国际算法
         *     - 选择是否压缩时，分以下两种情况：
         *       - is_compressed为true时，返回文件压缩包，命名为：证书名称_type字段小写字母.zip，如”test_apache.zip“。
         *         - 系统生成密钥签发证书
         *           - type &#x3D; \&quot;**APACHE**\&quot;时，压缩包中包含三个文件：**server.key**（密钥文件，内容为PEM格式，若导出证书时设置密码，则为加密后的私钥）、**chain.crt**（证书链，内容为PEM格式）、**server.crt**（证书，内容为PEM格式）；
         *           - type &#x3D; \&quot;**IIS**\&quot;时，压缩包中包含两个文件：**keystorePass.txt**（keystore口令，若导出证书时设置密码，则无此密码文件）、**server.pfx**（PFX证书，证书与证书链包含在同一个文件）；
         *           - type &#x3D; \&quot;**NGINX**\&quot;时，压缩包中包含两个文件：**server.key**（密钥文件，内容为PEM格式，若导出证书时设置密码，则为加密后的私钥）、**server.crt**（内容为PEM格式，证书与证书链包含在同一个文件）；
         *           - type &#x3D; \&quot;**TOMCAT**\&quot;时，压缩包中包含两个文件：**keystorePass.txt**（keystore口令，若导出证书时设置密码，则无此密码文件）、**server.jks**（JKX证书，证书与证书链包含在同一个文件）；
         *           - type &#x3D; \&quot;**OTHER**\&quot;时，压缩包中包含三个文件：**server.key**（密钥文件，内容为PEM格式，若导出证书时设置密码，则为加密后的私钥）、**chain.pem**（证书链）、**server.pem**（证书）。
         *         - 导入CSR签发证书
         *           - type &#x3D; \&quot;**APACHE**\&quot;或\&quot;**IIS**\&quot;或\&quot;**TOMCAT**\&quot;时，压缩包中包含两个文件：**chain.crt**（证书链，内容为PEM格式）、**server.crt**（证书，内容为PEM格式）；
         *           - type &#x3D; \&quot;**NGINX**\&quot;时，压缩包中包含一个文件：**server.crt**（证书，内容为PEM格式）；
         *           - type &#x3D; \&quot;**OTHER**\&quot;时，压缩包中包含两个文件：**chain.pem**（证书链，内容为PEM格式）、**cert.pem**（证书，内容为PEM格式）。
         *       - is_compressed为false时，返回json格式，返回的具体参数如下：
         *         - 系统生成密钥签发证书
         *           - type &#x3D; \&quot;**APACHE**\&quot;或\&quot;**NGINX**\&quot;或\&quot;**OTHER**\&quot;时，返回参数如下：
         *             - **certificate**（证书内容，PEM格式）；
         *             - **certificate_chain**（证书链，PEM格式）；
         *             - **private_key**（证书私钥，PEM格式，若导出证书时设置密码，则为加密后的私钥）；
         *           - type &#x3D; \&quot;**IIS**\&quot;或\&quot;**TOMCAT**\&quot;时，暂时未定义。
         *         - 导入CSR签发证书
         *           - type &#x3D; \&quot;**APACHE**\&quot;或\&quot;**NGINX**\&quot;或\&quot;**IIS**\&quot;或\&quot;**TOMCAT**\&quot;或\&quot;**OTHER**\&quot;时，返回参数如下：
         *             - **certificate**（证书内容，PEM格式）；
         *             - **certificate_chain**（证书链，PEM格式）；
         *   - 国密算法（中国站）
         *     - 选择是否压缩和是否国密标准时，分以下四种情况：
         *       - is_compressed为true、is_sm_standard为true时，返回文件压缩包，命名为：证书名称_type字段小写字母.zip，如”test_apache.zip“。
         *         - 系统生成密钥签发证书
         *           - type &#x3D; \&quot;**APACHE**\&quot;或\&quot;**IIS**\&quot;或\&quot;**NGINX**\&quot;或\&quot;**TOMCAT**\&quot;时，暂时未定义；
         *           - type &#x3D; \&quot;**OTHER**\&quot;时，压缩包中包含六个文件：**chain.pem**（证书链，内容为PEM格式）、**signCert.key**（签名证书密钥文件，内容为PEM格式，若导出证书时设置密码，则为加密后的私钥）、**signCert.pem**（签名证书，内容为PEM格式）、**encSm2EnvelopedKey.key**（加密证书的国密GMT0009标准规范数字信封文件，内容为BASE64编码）、**signedAndEnvelopedData.key**（加密证书的国密GMT0010标准规范数字信封文件，内容为BASE64编码）、**encCert.pem**（加密证书，内容为PEM格式）。
         *         - 导入CSR签发证书
         *           - type &#x3D; \&quot;**APACHE**\&quot;或\&quot;**IIS**\&quot;或\&quot;**NGINX**\&quot;或\&quot;**TOMCAT**\&quot;时，暂时未定义；
         *           - type &#x3D; \&quot;**OTHER**\&quot;时，压缩包中包含五个文件：**chain.pem**（证书链，内容为PEM格式）、**signCert.pem**（签名证书，内容为PEM格式）、**encSm2EnvelopedKey.key**（加密证书的国密GMT0009标准规范数字信封文件，内容为BASE64编码）、**signedAndEnvelopedData.key**（加密证书的国密GMT0010标准规范数字信封文件，内容为BASE64编码）、**encCert.pem**（加密证书，内容为PEM格式）。
         *       - is_compressed为true、is_sm_standard为false时，返回文件压缩包，命名为：证书名称_type字段小写字母.zip，如”test_apache.zip“。
         *         - 系统生成密钥签发证书
         *           - type &#x3D; \&quot;**APACHE**\&quot;或\&quot;**IIS**\&quot;或\&quot;**NGINX**\&quot;或\&quot;**TOMCAT**\&quot;时，暂时未定义；
         *           - type &#x3D; \&quot;**OTHER**\&quot;时，压缩包中包含五个文件：**chain.pem**（证书链，内容为PEM格式）、**signCert.key**（签名证书密钥文件，内容为PEM格式，若导出证书时设置密码，则为加密后的私钥）、**signCert.pem**（签名证书，内容为PEM格式）、**encCert.key**（加密证书密钥文件，内容为PEM格式，若导出证书时设置密码，则为加密后的私钥）、**encCert.pem**（加密证书，内容为PEM格式）。
         *         - 导入CSR签发证书
         *           - type &#x3D; \&quot;**APACHE**\&quot;或\&quot;**IIS**\&quot;或\&quot;**NGINX**\&quot;或\&quot;**TOMCAT**\&quot;时，暂时未定义；
         *           - type &#x3D; \&quot;**OTHER**\&quot;时，压缩包中包含四个文件：**chain.pem**（证书链，内容为PEM格式）、**signCert.pem**（签名证书，内容为PEM格式）、**encCert.key**（加密证书密钥文件，内容为PEM格式）、**encCert.pem**（加密证书，内容为PEM格式）。
         *       - is_compressed为false、is_sm_standard为true时，返回json格式，返回的具体参数如下：
         *         - 系统生成密钥签发证书
         *           - type &#x3D; \&quot;**APACHE**\&quot;或\&quot;**IIS**\&quot;或\&quot;**NGINX**\&quot;或\&quot;**TOMCAT**\&quot;时，暂时未定义；
         *           - type &#x3D; \&quot;**OTHER**\&quot;时，返回参数如下：
         *             - **certificate_chain**（证书链，PEM格式）；
         *             - **certificate**（签名证书内容，PEM格式）；
         *             - **private_key**（签名证书私钥，PEM格式，若导出证书时设置密码，则为加密后的私钥）；
         *             - **enc_certificate**（加密证书内容，PEM格式）；
         *             - **enc_sm2_enveloped_key**（加密证书的国密GMT0009标准规范数字信封文件，BASE64编码）；
         *             - **signed_and_enveloped_data**（加密证书的国密GMT0010标准规范数字信封文件，BASE64编码）。
         *         - 导入CSR签发证书
         *           - type &#x3D; \&quot;**APACHE**\&quot;或\&quot;**IIS**\&quot;或\&quot;**NGINX**\&quot;或\&quot;**TOMCAT**\&quot;时，暂时未定义；
         *           - type &#x3D; \&quot;**OTHER**\&quot;时，返回参数如下：
         *             - **certificate_chain**（证书链，PEM格式）；
         *             - **certificate**（签名证书内容，PEM格式）；
         *             - **enc_certificate**（加密证书内容，PEM格式）；
         *             - **enc_sm2_enveloped_key**（加密证书的国密GMT0009标准规范数字信封文件，BASE64编码）；
         *             - **signed_and_enveloped_data**（加密证书的国密GMT0010标准规范数字信封文件，BASE64编码）。
         *       - is_compressed为false、is_sm_standard为false时，返回json格式，返回的具体参数如下：
         *         - 系统生成密钥签发证书
         *           - type &#x3D; \&quot;**APACHE**\&quot;或\&quot;**IIS**\&quot;或\&quot;**NGINX**\&quot;或\&quot;**TOMCAT**\&quot;时，暂时未定义；
         *           - type &#x3D; \&quot;**OTHER**\&quot;时，返回参数如下：
         *             - **certificate_chain**（证书链，PEM格式）；
         *             - **certificate**（签名证书内容，PEM格式）；
         *             - **private_key**（签名证书私钥，PEM格式，若导出证书时设置密码，则为加密后的私钥）；
         *             - **enc_certificate**（加密证书内容，PEM格式）；
         *             - **enc_private_key**（加密证书私钥，PEM格式，若导出证书时设置密码，则为加密后的私钥）。
         *         - 导入CSR签发证书
         *           - type &#x3D; \&quot;**APACHE**\&quot;或\&quot;**IIS**\&quot;或\&quot;**NGINX**\&quot;或\&quot;**TOMCAT**\&quot;时，暂时未定义；
         *           - type &#x3D; \&quot;**OTHER**\&quot;时，返回参数如下：
         *             - **certificate_chain**（证书链，PEM格式）；
         *             - **certificate**（签名证书内容，PEM格式）；
         *             - **enc_certificate**（加密证书内容，PEM格式）；
         *             - **enc_private_key**（加密证书私钥，PEM格式）。
         * &gt; 只有当证书状态为“已签发”时，可进行导出操作。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        exportCertificate(exportCertificateRequest?: ExportCertificateRequest) {
            const options = {
                method: "POST",
                url: "/v1/private-certificates/{certificate_id}/export",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let certificateId;

            if (exportCertificateRequest !== null && exportCertificateRequest !== undefined) {
                if (exportCertificateRequest instanceof ExportCertificateRequest) {
                    certificateId = exportCertificateRequest.certificateId;
                    body = exportCertificateRequest.body
                } else {
                    certificateId = exportCertificateRequest['certificate_id'];
                    body = exportCertificateRequest['body'];
                }
            }

        
            if (certificateId === null || certificateId === undefined) {
            throw new RequiredError('certificateId','Required parameter certificateId was null or undefined when calling exportCertificate.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'certificate_id': certificateId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据标签查询CA列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listCaResourceInstances(listCaResourceInstancesRequest?: ListCaResourceInstancesRequest) {
            const options = {
                method: "POST",
                url: "/v1/private-certificate-authorities/resource-instances/filter",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (listCaResourceInstancesRequest !== null && listCaResourceInstancesRequest !== undefined) {
                if (listCaResourceInstancesRequest instanceof ListCaResourceInstancesRequest) {
                    body = listCaResourceInstancesRequest.body
                } else {
                    body = listCaResourceInstancesRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据CA证书ID查询此CA的标签列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listCaTags(listCaTagsRequest?: ListCaTagsRequest) {
            const options = {
                method: "GET",
                url: "/v1/private-certificate-authorities/{ca_id}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let caId;

            if (listCaTagsRequest !== null && listCaTagsRequest !== undefined) {
                if (listCaTagsRequest instanceof ListCaTagsRequest) {
                    caId = listCaTagsRequest.caId;
                } else {
                    caId = listCaTagsRequest['ca_id'];
                }
            }

        
            if (caId === null || caId === undefined) {
            throw new RequiredError('caId','Required parameter caId was null or undefined when calling listCaTags.');
            }

            options.pathParams = { 'ca_id': caId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据标签查询证书列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listCertResourceInstances(listCertResourceInstancesRequest?: ListCertResourceInstancesRequest) {
            const options = {
                method: "POST",
                url: "/v1/private-certificates/resource-instances/filter",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (listCertResourceInstancesRequest !== null && listCertResourceInstancesRequest !== undefined) {
                if (listCertResourceInstancesRequest instanceof ListCertResourceInstancesRequest) {
                    body = listCertResourceInstancesRequest.body
                } else {
                    body = listCertResourceInstancesRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据证书ID查询此证书的标签列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listCertTags(listCertTagsRequest?: ListCertTagsRequest) {
            const options = {
                method: "GET",
                url: "/v1/private-certificates/{certificate_id}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let certificateId;

            if (listCertTagsRequest !== null && listCertTagsRequest !== undefined) {
                if (listCertTagsRequest instanceof ListCertTagsRequest) {
                    certificateId = listCertTagsRequest.certificateId;
                } else {
                    certificateId = listCertTagsRequest['certificate_id'];
                }
            }

        
            if (certificateId === null || certificateId === undefined) {
            throw new RequiredError('certificateId','Required parameter certificateId was null or undefined when calling listCertTags.');
            }

            options.pathParams = { 'certificate_id': certificateId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询私有证书列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listCertificate(listCertificateRequest?: ListCertificateRequest) {
            const options = {
                method: "GET",
                url: "/v1/private-certificates",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let name;
            
            let offset;
            
            let status;
            
            let sortKey;
            
            let sortDir;

            if (listCertificateRequest !== null && listCertificateRequest !== undefined) {
                if (listCertificateRequest instanceof ListCertificateRequest) {
                    limit = listCertificateRequest.limit;
                    name = listCertificateRequest.name;
                    offset = listCertificateRequest.offset;
                    status = listCertificateRequest.status;
                    sortKey = listCertificateRequest.sortKey;
                    sortDir = listCertificateRequest.sortDir;
                } else {
                    limit = listCertificateRequest['limit'];
                    name = listCertificateRequest['name'];
                    offset = listCertificateRequest['offset'];
                    status = listCertificateRequest['status'];
                    sortKey = listCertificateRequest['sort_key'];
                    sortDir = listCertificateRequest['sort_dir'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询OBS桶列表。
         * &gt; 只有用户创建了委托授权，方可使用此接口。创建委托授权参见本文档：**证书吊销处理&gt;创建委托**。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listCertificateAuthorityObsBucket() {
            const options = {
                method: "GET",
                url: "/v1/private-certificate-authorities/obs/buckets",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;


            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询所有CA标签列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDomainCaTags() {
            const options = {
                method: "GET",
                url: "/v1/private-certificate-authorities/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;


            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询所有证书标签列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDomainCertTags() {
            const options = {
                method: "GET",
                url: "/v1/private-certificates/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;


            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 解析CSR。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        parseCertificateSigningRequest(parseCertificateSigningRequestRequest?: ParseCertificateSigningRequestRequest) {
            const options = {
                method: "POST",
                url: "/v1/private-certificates/csr/parse",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (parseCertificateSigningRequestRequest !== null && parseCertificateSigningRequestRequest !== undefined) {
                if (parseCertificateSigningRequestRequest instanceof ParseCertificateSigningRequestRequest) {
                    body = parseCertificateSigningRequestRequest.body
                } else {
                    body = parseCertificateSigningRequestRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 吊销证书。
         * &gt; 注：当不想填写吊销理由时，请求body体请置为\&quot;**{}**\&quot;，否则将会报错。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        revokeCertificate(revokeCertificateRequest?: RevokeCertificateRequest) {
            const options = {
                method: "POST",
                url: "/v1/private-certificates/{certificate_id}/revoke",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let certificateId;

            if (revokeCertificateRequest !== null && revokeCertificateRequest !== undefined) {
                if (revokeCertificateRequest instanceof RevokeCertificateRequest) {
                    certificateId = revokeCertificateRequest.certificateId;
                    body = revokeCertificateRequest.body
                } else {
                    certificateId = revokeCertificateRequest['certificate_id'];
                    body = revokeCertificateRequest['body'];
                }
            }

        
            if (certificateId === null || certificateId === undefined) {
            throw new RequiredError('certificateId','Required parameter certificateId was null or undefined when calling revokeCertificate.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'certificate_id': certificateId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查看是否有服务委托。
         * &gt; 用户所使用账号token需要具备安全管理员（secu_admin）权限。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAgency() {
            const options = {
                method: "GET",
                url: "/v1/private-certificate-authorities/agency",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;


            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询证书详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showCertificate(showCertificateRequest?: ShowCertificateRequest) {
            const options = {
                method: "GET",
                url: "/v1/private-certificates/{certificate_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let certificateId;

            if (showCertificateRequest !== null && showCertificateRequest !== undefined) {
                if (showCertificateRequest instanceof ShowCertificateRequest) {
                    certificateId = showCertificateRequest.certificateId;
                } else {
                    certificateId = showCertificateRequest['certificate_id'];
                }
            }

        
            if (certificateId === null || certificateId === undefined) {
            throw new RequiredError('certificateId','Required parameter certificateId was null or undefined when calling showCertificate.');
            }

            options.pathParams = { 'certificate_id': certificateId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查看是否具有委托权限。
         * &gt; 用户所使用账号token需要具备安全管理员（secu_admin）权限。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showCertificateAuthorityObsAgency() {
            const options = {
                method: "GET",
                url: "/v1/private-certificate-authorities/obs/agencies",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;


            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询私有证书配额。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showCertificateQuota() {
            const options = {
                method: "GET",
                url: "/v1/private-certificates/quotas",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;


            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询局点支持特性。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showConsoleConfig() {
            const options = {
                method: "GET",
                url: "/v1/pca/config/console",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;


            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建CA，分以下三种情况：
         * - 创建根CA，根据参数介绍中，填写必选值；
         * - 创建从属CA，并需要直接激活该证书，根据参数介绍中，填写必选值；
         * - 创建从属CA，不需要直接激活该证书，请求body中只需要缺少此三个参数之一即可：issuer_id、signature_algorithm、validity。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createCertificateAuthority(createCertificateAuthorityRequest?: CreateCertificateAuthorityRequest) {
            const options = {
                method: "POST",
                url: "/v1/private-certificate-authorities",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createCertificateAuthorityRequest !== null && createCertificateAuthorityRequest !== undefined) {
                if (createCertificateAuthorityRequest instanceof CreateCertificateAuthorityRequest) {
                    body = createCertificateAuthorityRequest.body
                } else {
                    body = createCertificateAuthorityRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 计划删除CA。计划多少天后删除CA证书，可设置7天～30天内删除。
         * &gt; 只有当证书状态为”待激活“或”已禁用“状态时，才可删除。”待激活“状态下，将会立即删除证书，不支持延迟删除。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteCertificateAuthority(deleteCertificateAuthorityRequest?: DeleteCertificateAuthorityRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/private-certificate-authorities/{ca_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let caId;
            
            let pendingDays;

            if (deleteCertificateAuthorityRequest !== null && deleteCertificateAuthorityRequest !== undefined) {
                if (deleteCertificateAuthorityRequest instanceof DeleteCertificateAuthorityRequest) {
                    caId = deleteCertificateAuthorityRequest.caId;
                    pendingDays = deleteCertificateAuthorityRequest.pendingDays;
                } else {
                    caId = deleteCertificateAuthorityRequest['ca_id'];
                    pendingDays = deleteCertificateAuthorityRequest['pending_days'];
                }
            }

        
            if (caId === null || caId === undefined) {
            throw new RequiredError('caId','Required parameter caId was null or undefined when calling deleteCertificateAuthority.');
            }
            if (pendingDays === null || pendingDays === undefined) {
                throw new RequiredError('pendingDays','Required parameter pendingDays was null or undefined when calling deleteCertificateAuthority.');
            }
            if (pendingDays !== null && pendingDays !== undefined) {
                localVarQueryParameter['pending_days'] = pendingDays;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'ca_id': caId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 禁用CA。
         * &gt; 只有当证书处于\&quot;已激活\&quot;或\&quot;已过期\&quot;状态时，可进行禁用操作。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        disableCertificateAuthority(disableCertificateAuthorityRequest?: DisableCertificateAuthorityRequest) {
            const options = {
                method: "POST",
                url: "/v1/private-certificate-authorities/{ca_id}/disable",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let caId;

            if (disableCertificateAuthorityRequest !== null && disableCertificateAuthorityRequest !== undefined) {
                if (disableCertificateAuthorityRequest instanceof DisableCertificateAuthorityRequest) {
                    caId = disableCertificateAuthorityRequest.caId;
                } else {
                    caId = disableCertificateAuthorityRequest['ca_id'];
                }
            }

        
            if (caId === null || caId === undefined) {
            throw new RequiredError('caId','Required parameter caId was null or undefined when calling disableCertificateAuthority.');
            }

            options.pathParams = { 'ca_id': caId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 启用CA。
         * &gt; 注：只有当证书处于\&quot;已禁用\&quot;状态时，可进行启用操作。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        enableCertificateAuthority(enableCertificateAuthorityRequest?: EnableCertificateAuthorityRequest) {
            const options = {
                method: "POST",
                url: "/v1/private-certificate-authorities/{ca_id}/enable",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let caId;

            if (enableCertificateAuthorityRequest !== null && enableCertificateAuthorityRequest !== undefined) {
                if (enableCertificateAuthorityRequest instanceof EnableCertificateAuthorityRequest) {
                    caId = enableCertificateAuthorityRequest.caId;
                } else {
                    caId = enableCertificateAuthorityRequest['ca_id'];
                }
            }

        
            if (caId === null || caId === undefined) {
            throw new RequiredError('caId','Required parameter caId was null or undefined when calling enableCertificateAuthority.');
            }

            options.pathParams = { 'ca_id': caId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 导出CA证书。
         * &gt; 注：只有当证书处于\&quot;已激活\&quot;或\&quot;已过期\&quot;时，可进行导出操作。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        exportCertificateAuthorityCertificate(exportCertificateAuthorityCertificateRequest?: ExportCertificateAuthorityCertificateRequest) {
            const options = {
                method: "POST",
                url: "/v1/private-certificate-authorities/{ca_id}/export",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let caId;

            if (exportCertificateAuthorityCertificateRequest !== null && exportCertificateAuthorityCertificateRequest !== undefined) {
                if (exportCertificateAuthorityCertificateRequest instanceof ExportCertificateAuthorityCertificateRequest) {
                    caId = exportCertificateAuthorityCertificateRequest.caId;
                } else {
                    caId = exportCertificateAuthorityCertificateRequest['ca_id'];
                }
            }

        
            if (caId === null || caId === undefined) {
            throw new RequiredError('caId','Required parameter caId was null or undefined when calling exportCertificateAuthorityCertificate.');
            }

            options.pathParams = { 'ca_id': caId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 导出CA的证书签名请求。
         * &gt; 只有当CA处于\&quot;待激活\&quot;状态时，可导出证书签名请求。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        exportCertificateAuthorityCsr(exportCertificateAuthorityCsrRequest?: ExportCertificateAuthorityCsrRequest) {
            const options = {
                method: "GET",
                url: "/v1/private-certificate-authorities/{ca_id}/csr",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let caId;

            if (exportCertificateAuthorityCsrRequest !== null && exportCertificateAuthorityCsrRequest !== undefined) {
                if (exportCertificateAuthorityCsrRequest instanceof ExportCertificateAuthorityCsrRequest) {
                    caId = exportCertificateAuthorityCsrRequest.caId;
                } else {
                    caId = exportCertificateAuthorityCsrRequest['ca_id'];
                }
            }

        
            if (caId === null || caId === undefined) {
            throw new RequiredError('caId','Required parameter caId was null or undefined when calling exportCertificateAuthorityCsr.');
            }

            options.pathParams = { 'ca_id': caId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 导入CA证书，使用本接口需要满足以下条件：
         *   - （1）证书为“待激活”状态的从属CA；
         *   - （2）导入的证书体必须满足以下条件：
         *       - a、该证书被签发时的证书签名请求必须是从PCA系统中导出；
         *       - b、其证书链虽然允许不上传，但后期若想要导出完整的证书链，应导入完整的证书链；
         *       - c、证书体与证书链必须为PEM编码。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        importCertificateAuthorityCertificate(importCertificateAuthorityCertificateRequest?: ImportCertificateAuthorityCertificateRequest) {
            const options = {
                method: "POST",
                url: "/v1/private-certificate-authorities/{ca_id}/import",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let caId;

            if (importCertificateAuthorityCertificateRequest !== null && importCertificateAuthorityCertificateRequest !== undefined) {
                if (importCertificateAuthorityCertificateRequest instanceof ImportCertificateAuthorityCertificateRequest) {
                    caId = importCertificateAuthorityCertificateRequest.caId;
                    body = importCertificateAuthorityCertificateRequest.body
                } else {
                    caId = importCertificateAuthorityCertificateRequest['ca_id'];
                    body = importCertificateAuthorityCertificateRequest['body'];
                }
            }

        
            if (caId === null || caId === undefined) {
            throw new RequiredError('caId','Required parameter caId was null or undefined when calling importCertificateAuthorityCertificate.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'ca_id': caId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 激活CA。
         * &gt; 只有当证书处于\&quot;待激活\&quot;状态时，可进行激活操作。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        issueCertificateAuthorityCertificate(issueCertificateAuthorityCertificateRequest?: IssueCertificateAuthorityCertificateRequest) {
            const options = {
                method: "POST",
                url: "/v1/private-certificate-authorities/{ca_id}/activate",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let caId;

            if (issueCertificateAuthorityCertificateRequest !== null && issueCertificateAuthorityCertificateRequest !== undefined) {
                if (issueCertificateAuthorityCertificateRequest instanceof IssueCertificateAuthorityCertificateRequest) {
                    caId = issueCertificateAuthorityCertificateRequest.caId;
                    body = issueCertificateAuthorityCertificateRequest.body
                } else {
                    caId = issueCertificateAuthorityCertificateRequest['ca_id'];
                    body = issueCertificateAuthorityCertificateRequest['body'];
                }
            }

        
            if (caId === null || caId === undefined) {
            throw new RequiredError('caId','Required parameter caId was null or undefined when calling issueCertificateAuthorityCertificate.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'ca_id': caId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询CA列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listCertificateAuthority(listCertificateAuthorityRequest?: ListCertificateAuthorityRequest) {
            const options = {
                method: "GET",
                url: "/v1/private-certificate-authorities",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let name;
            
            let offset;
            
            let status;
            
            let type;
            
            let sortKey;
            
            let sortDir;

            if (listCertificateAuthorityRequest !== null && listCertificateAuthorityRequest !== undefined) {
                if (listCertificateAuthorityRequest instanceof ListCertificateAuthorityRequest) {
                    limit = listCertificateAuthorityRequest.limit;
                    name = listCertificateAuthorityRequest.name;
                    offset = listCertificateAuthorityRequest.offset;
                    status = listCertificateAuthorityRequest.status;
                    type = listCertificateAuthorityRequest.type;
                    sortKey = listCertificateAuthorityRequest.sortKey;
                    sortDir = listCertificateAuthorityRequest.sortDir;
                } else {
                    limit = listCertificateAuthorityRequest['limit'];
                    name = listCertificateAuthorityRequest['name'];
                    offset = listCertificateAuthorityRequest['offset'];
                    status = listCertificateAuthorityRequest['status'];
                    type = listCertificateAuthorityRequest['type'];
                    sortKey = listCertificateAuthorityRequest['sort_key'];
                    sortDir = listCertificateAuthorityRequest['sort_dir'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (type !== null && type !== undefined) {
                localVarQueryParameter['type'] = type;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 恢复CA，将处于“计划删除”状态的CA证书，重新恢复为“已禁用”状态。
         * &gt; 注：只有处于“计划删除”状态的CA证书，才可进行恢复操作。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        restoreCertificateAuthority(restoreCertificateAuthorityRequest?: RestoreCertificateAuthorityRequest) {
            const options = {
                method: "POST",
                url: "/v1/private-certificate-authorities/{ca_id}/restore",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let caId;

            if (restoreCertificateAuthorityRequest !== null && restoreCertificateAuthorityRequest !== undefined) {
                if (restoreCertificateAuthorityRequest instanceof RestoreCertificateAuthorityRequest) {
                    caId = restoreCertificateAuthorityRequest.caId;
                } else {
                    caId = restoreCertificateAuthorityRequest['ca_id'];
                }
            }

        
            if (caId === null || caId === undefined) {
            throw new RequiredError('caId','Required parameter caId was null or undefined when calling restoreCertificateAuthority.');
            }

            options.pathParams = { 'ca_id': caId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 吊销子CA。
         * &gt; 注：当不想填写吊销理由时，请求body体请置为\&quot;**{}**\&quot;，否则将会报错。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        revokeCertificateAuthority(revokeCertificateAuthorityRequest?: RevokeCertificateAuthorityRequest) {
            const options = {
                method: "POST",
                url: "/v1/private-certificate-authorities/{ca_id}/revoke",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let caId;

            if (revokeCertificateAuthorityRequest !== null && revokeCertificateAuthorityRequest !== undefined) {
                if (revokeCertificateAuthorityRequest instanceof RevokeCertificateAuthorityRequest) {
                    caId = revokeCertificateAuthorityRequest.caId;
                    body = revokeCertificateAuthorityRequest.body
                } else {
                    caId = revokeCertificateAuthorityRequest['ca_id'];
                    body = revokeCertificateAuthorityRequest['body'];
                }
            }

        
            if (caId === null || caId === undefined) {
            throw new RequiredError('caId','Required parameter caId was null or undefined when calling revokeCertificateAuthority.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'ca_id': caId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询CA详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showCertificateAuthority(showCertificateAuthorityRequest?: ShowCertificateAuthorityRequest) {
            const options = {
                method: "GET",
                url: "/v1/private-certificate-authorities/{ca_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let caId;

            if (showCertificateAuthorityRequest !== null && showCertificateAuthorityRequest !== undefined) {
                if (showCertificateAuthorityRequest instanceof ShowCertificateAuthorityRequest) {
                    caId = showCertificateAuthorityRequest.caId;
                } else {
                    caId = showCertificateAuthorityRequest['ca_id'];
                }
            }

        
            if (caId === null || caId === undefined) {
            throw new RequiredError('caId','Required parameter caId was null or undefined when calling showCertificateAuthority.');
            }

            options.pathParams = { 'ca_id': caId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询CA证书配额。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showCertificateAuthorityQuota() {
            const options = {
                method: "GET",
                url: "/v1/private-certificate-authorities/quotas",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;


            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 启用或禁用当前CA的OCSP。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateOcspSwitch(updateOcspSwitchRequest?: UpdateOcspSwitchRequest) {
            const options = {
                method: "POST",
                url: "/v1/private-certificate-authorities/{ca_id}/ocsp/switch",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let caId;

            if (updateOcspSwitchRequest !== null && updateOcspSwitchRequest !== undefined) {
                if (updateOcspSwitchRequest instanceof UpdateOcspSwitchRequest) {
                    caId = updateOcspSwitchRequest.caId;
                    body = updateOcspSwitchRequest.body
                } else {
                    caId = updateOcspSwitchRequest['ca_id'];
                    body = updateOcspSwitchRequest['body'];
                }
            }

        
            if (caId === null || caId === undefined) {
            throw new RequiredError('caId','Required parameter caId was null or undefined when calling updateOcspSwitch.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'ca_id': caId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): CcmClient {
    return new CcmClient(client);
}

/**
 *
 * @export
 * @class RequiredError
 * @extends {Error}
 */
export class RequiredError extends Error {
    name: "RequiredError" = "RequiredError";
    constructor(public field: string, msg?: string) {
        super(msg);
    }
}