import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { ApplyCertificateRequest } from './model/ApplyCertificateRequest';
import { ApplyCertificateRequestBody } from './model/ApplyCertificateRequestBody';
import { ApplyCertificateResponse } from './model/ApplyCertificateResponse';
import { Authentification } from './model/Authentification';
import { BatchCreateOrDeleteTagsRequest } from './model/BatchCreateOrDeleteTagsRequest';
import { BatchCreateOrDeleteTagsRequestBody } from './model/BatchCreateOrDeleteTagsRequestBody';
import { BatchCreateOrDeleteTagsResponse } from './model/BatchCreateOrDeleteTagsResponse';
import { BatchPushCertificateRequest } from './model/BatchPushCertificateRequest';
import { BatchPushCertificateRequestBody } from './model/BatchPushCertificateRequestBody';
import { BatchPushCertificateResponse } from './model/BatchPushCertificateResponse';
import { BatchPushCertificateResponseBodyResults } from './model/BatchPushCertificateResponseBodyResults';
import { CSRResponseBody } from './model/CSRResponseBody';
import { CancelCertificateRequestRequest } from './model/CancelCertificateRequestRequest';
import { CancelCertificateRequestResponse } from './model/CancelCertificateRequestResponse';
import { CertDetail } from './model/CertDetail';
import { CertificateDetail } from './model/CertificateDetail';
import { CreateCertificateTagRequest } from './model/CreateCertificateTagRequest';
import { CreateCertificateTagRequestBody } from './model/CreateCertificateTagRequestBody';
import { CreateCertificateTagResponse } from './model/CreateCertificateTagResponse';
import { CreateCsrRequest } from './model/CreateCsrRequest';
import { CreateCsrRequestBody } from './model/CreateCsrRequestBody';
import { CreateCsrResponse } from './model/CreateCsrResponse';
import { DeleteCertificateRequest } from './model/DeleteCertificateRequest';
import { DeleteCertificateResponse } from './model/DeleteCertificateResponse';
import { DeleteCsrRequest } from './model/DeleteCsrRequest';
import { DeleteCsrResponse } from './model/DeleteCsrResponse';
import { DeployCertificateRequest } from './model/DeployCertificateRequest';
import { DeployCertificateRequestBody } from './model/DeployCertificateRequestBody';
import { DeployCertificateResponse } from './model/DeployCertificateResponse';
import { DeployedResource } from './model/DeployedResource';
import { DeployedResourceDetail } from './model/DeployedResourceDetail';
import { ExportCertificateRequest } from './model/ExportCertificateRequest';
import { ExportCertificateResponse } from './model/ExportCertificateResponse';
import { FaiureResource } from './model/FaiureResource';
import { ImportCertificateRequest } from './model/ImportCertificateRequest';
import { ImportCertificateRequestBody } from './model/ImportCertificateRequestBody';
import { ImportCertificateResponse } from './model/ImportCertificateResponse';
import { ListAllTagsRequest } from './model/ListAllTagsRequest';
import { ListAllTagsResponse } from './model/ListAllTagsResponse';
import { ListCertificatesByTagRequest } from './model/ListCertificatesByTagRequest';
import { ListCertificatesByTagRequestBody } from './model/ListCertificatesByTagRequestBody';
import { ListCertificatesByTagResponse } from './model/ListCertificatesByTagResponse';
import { ListCertificatesRequest } from './model/ListCertificatesRequest';
import { ListCertificatesResponse } from './model/ListCertificatesResponse';
import { ListCsrRequest } from './model/ListCsrRequest';
import { ListCsrResponse } from './model/ListCsrResponse';
import { ListDeployedResourcesRequest } from './model/ListDeployedResourcesRequest';
import { ListDeployedResourcesRequestBody } from './model/ListDeployedResourcesRequestBody';
import { ListDeployedResourcesResponse } from './model/ListDeployedResourcesResponse';
import { ListTagsByCertificateRequest } from './model/ListTagsByCertificateRequest';
import { ListTagsByCertificateResponse } from './model/ListTagsByCertificateResponse';
import { PurchaseCertificateRequestBody } from './model/PurchaseCertificateRequestBody';
import { PushCertificateRequest } from './model/PushCertificateRequest';
import { PushCertificateRequestBody } from './model/PushCertificateRequestBody';
import { PushCertificateResponse } from './model/PushCertificateResponse';
import { RegionResourceDetail } from './model/RegionResourceDetail';
import { ResourceDetail } from './model/ResourceDetail';
import { ResultDetail } from './model/ResultDetail';
import { ScsMatch } from './model/ScsMatch';
import { ScsResourceTag } from './model/ScsResourceTag';
import { ScsTag } from './model/ScsTag';
import { ShowCertificateRequest } from './model/ShowCertificateRequest';
import { ShowCertificateResponse } from './model/ShowCertificateResponse';
import { ShowCertificateResponseBodyApplicationInfo } from './model/ShowCertificateResponseBodyApplicationInfo';
import { ShowCsrPrivateKeyRequest } from './model/ShowCsrPrivateKeyRequest';
import { ShowCsrPrivateKeyResponse } from './model/ShowCsrPrivateKeyResponse';
import { ShowCsrRequest } from './model/ShowCsrRequest';
import { ShowCsrResponse } from './model/ShowCsrResponse';
import { SubscribeCertificateRequest } from './model/SubscribeCertificateRequest';
import { SubscribeCertificateResponse } from './model/SubscribeCertificateResponse';
import { TagResource } from './model/TagResource';
import { TagResourceResourceDetail } from './model/TagResourceResourceDetail';
import { UnsubscribeCertificateRequest } from './model/UnsubscribeCertificateRequest';
import { UnsubscribeCertificateResponse } from './model/UnsubscribeCertificateResponse';
import { UpdateCSRRequestBody } from './model/UpdateCSRRequestBody';
import { UpdateCsrRequest } from './model/UpdateCsrRequest';
import { UpdateCsrResponse } from './model/UpdateCsrResponse';
import { UploadCsrRequest } from './model/UploadCsrRequest';
import { UploadCsrRequestBody } from './model/UploadCsrRequestBody';
import { UploadCsrResponse } from './model/UploadCsrResponse';

export class ScmClient {
    public static newBuilder(): ClientBuilder<ScmClient> {
            let client = new ClientBuilder<ScmClient>(newClient);
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
     * 申请证书。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 申请证书
     * @param {string} certificateId 证书id。
     * @param {ApplyCertificateRequestBody} applyCertificateRequestBody requestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public applyCertificate(applyCertificateRequest?: ApplyCertificateRequest): Promise<ApplyCertificateResponse> {
        const options = ParamCreater().applyCertificate(applyCertificateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量创建或删除标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量创建或删除标签
     * @param {string} resourceId 证书id。
     * @param {BatchCreateOrDeleteTagsRequestBody} batchCreateOrDeleteTagsRequestBody requestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchCreateOrDeleteTags(batchCreateOrDeleteTagsRequest?: BatchCreateOrDeleteTagsRequest): Promise<BatchCreateOrDeleteTagsResponse> {
        const options = ParamCreater().batchCreateOrDeleteTags(batchCreateOrDeleteTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 批量推送SSL证书到弹性负载均衡（Elastic Load Balance，简称ELB）、Web应用防火墙（Web Application Firewall，WAF）、CDN（Content Delivery Network，内容分发网络）等其它华为云产品中。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量推送证书
     * @param {string} certificateId 证书id。
     * @param {BatchPushCertificateRequestBody} batchPushCertificateRequestBody requestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchPushCertificate(batchPushCertificateRequest?: BatchPushCertificateRequest): Promise<BatchPushCertificateResponse> {
        const options = ParamCreater().batchPushCertificate(batchPushCertificateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 撤回证书申请。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 撤回证书申请
     * @param {string} certificateId 证书ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public cancelCertificateRequest(cancelCertificateRequestRequest?: CancelCertificateRequestRequest): Promise<CancelCertificateRequestResponse> {
        const options = ParamCreater().cancelCertificateRequest(cancelCertificateRequestRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建标签
     * @param {string} resourceId 证书id。
     * @param {CreateCertificateTagRequestBody} createCertificateTagRequestBody requestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createCertificateTag(createCertificateTagRequest?: CreateCertificateTagRequest): Promise<CreateCertificateTagResponse> {
        const options = ParamCreater().createCertificateTag(createCertificateTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除证书实例，即将证书资源从系统中删除。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除证书
     * @param {string} certificateId 证书id。
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
     * 部署SSL证书到弹性负载均衡（Elastic Load Balance，简称ELB）、Web应用防火墙（Web Application Firewall，WAF）、CDN（Content Delivery Network，内容分发网络）等其它华为云产品中。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 部署证书
     * @param {string} certificateId 证书id。
     * @param {DeployCertificateRequestBody} deployCertificateRequestBody requestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deployCertificate(deployCertificateRequest?: DeployCertificateRequest): Promise<DeployCertificateResponse> {
        const options = ParamCreater().deployCertificate(deployCertificateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 导出证书。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 导出证书
     * @param {string} certificateId 证书id。
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
     * 导入证书到CCM服务管理。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 导入证书
     * @param {ImportCertificateRequestBody} importCertificateRequestBody requestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public importCertificate(importCertificateRequest?: ImportCertificateRequest): Promise<ImportCertificateResponse> {
        const options = ParamCreater().importCertificate(importCertificateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询所有标签列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询所有标签列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAllTags(listAllTagsRequest?: ListAllTagsRequest): Promise<ListAllTagsResponse> {
        const options = ParamCreater().listAllTags();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据证书名称或绑定域名查询证书列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询证书列表
     * @param {number} [limit] 每页条目数量，取值如下： - 10：每页显示10条证书信息。 - 20：每页显示20条证书信息。 - 50：每页显示50条证书信息。
     * @param {number} [offset] 偏移量。
     * @param {string} [sortDir] 排序方式。根据排序参数sort_key进行排序，取值如下： - ASC：升序。 - DESC：降序。
     * @param {string} [sortKey] 排序依据参数，取值如下： - certExpiredTime：证书到期时间。 - certStatus：证书状态。 - certUpdateTime：证书更新时间。
     * @param {string} [status] 证书状态，取值如下： - ALL：所有证书状态。 - PAID：证书已支付，待申请证书。 - ISSUED：证书已签发。 - CHECKING：证书申请审核中。 - CANCELCHECKING：取消证书申请审核中。 - UNPASSED：证书申请未通过。 - EXPIRED：证书已过期。 - REVOKING：证书吊销申请审核中。 - REVOKED：证书已吊销。 - UPLOAD：证书托管中。 - CHECKING_ORG：待完成企业资格认证。 - ISSUING：证书待签发。 - SUPPLEMENTCHECKING：多域名证书新增附加域名审核中。
     * @param {string} [enterpriseProjectId] 企业多项目ID。用户未开通企业多项目时，不需要输入该字段。 用户开通企业多项目时，查询资源可以输入该字段。 若用户不输入该字段，默认查询租户所有有权限的企业多项目下的资源。 此时“enterprise_project_id”取值为“all”。 若用户输入该字段，取值满足以下任一条件。 - 取值为“all” - 取值为“0” - 满足正则匹配：“^[0-9a-z]{8}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{12}$”
     * @param {boolean} [deploySupport] 是否仅筛选支持部署的证书。
     * @param {boolean} [ownedBySelf] 过滤资源是否属于当前租户，取值如下： - true：只查属于当前租户的资源，不包括共享资源。 - false：查询当前租户及共享给该租户的资源。
     * @param {number} [expiredDaysSince] 证书在有效期内及最多过期xx天。
     * @param {string} [content] 证书名称、域名搜索关键词
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listCertificates(listCertificatesRequest?: ListCertificatesRequest): Promise<ListCertificatesResponse> {
        const options = ParamCreater().listCertificates(listCertificatesRequest);

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
     * @param {string} resourceInstances 定值为resource_instances。
     * @param {ListCertificatesByTagRequestBody} listCertificatesByTagRequestBody requestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listCertificatesByTag(listCertificatesByTagRequest?: ListCertificatesByTagRequest): Promise<ListCertificatesByTagResponse> {
        const options = ParamCreater().listCertificatesByTag(listCertificatesByTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询证书已部署的具体资源。针对已签发和上传的非国密证书。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询已部署资源
     * @param {ListDeployedResourcesRequestBody} listDeployedResourcesRequestBody requestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listDeployedResources(listDeployedResourcesRequest?: ListDeployedResourcesRequest): Promise<ListDeployedResourcesResponse> {
        const options = ParamCreater().listDeployedResources(listDeployedResourcesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据证书ID查询标签列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 根据证书ID查询标签列表
     * @param {string} resourceId 证书id。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTagsByCertificate(listTagsByCertificateRequest?: ListTagsByCertificateRequest): Promise<ListTagsByCertificateResponse> {
        const options = ParamCreater().listTagsByCertificate(listTagsByCertificateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 推送SSL证书到弹性负载均衡（Elastic Load Balance，简称ELB）、Web应用防火墙（Web Application Firewall，WAF）、CDN（Content Delivery Network，内容分发网络）等其它华为云产品中。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 推送证书
     * @param {string} certificateId 证书id。
     * @param {PushCertificateRequestBody} pushCertificateRequestBody requestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public pushCertificate(pushCertificateRequest?: PushCertificateRequest): Promise<PushCertificateResponse> {
        const options = ParamCreater().pushCertificate(pushCertificateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询某张证书的详细信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取证书详情
     * @param {string} certificateId 证书id。
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
     * 购买SSL证书。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 购买SSL证书
     * @param {PurchaseCertificateRequestBody} subscribeCertificateRequestBody requestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public subscribeCertificate(subscribeCertificateRequest?: SubscribeCertificateRequest): Promise<SubscribeCertificateResponse> {
        const options = ParamCreater().subscribeCertificate(subscribeCertificateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 退订证书。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 退订证书
     * @param {string} certId 证书id。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public unsubscribeCertificate(unsubscribeCertificateRequest?: UnsubscribeCertificateRequest): Promise<UnsubscribeCertificateResponse> {
        const options = ParamCreater().unsubscribeCertificate(unsubscribeCertificateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建CSR。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建CSR
     * @param {CreateCsrRequestBody} createCsrRequestBody requestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createCsr(createCsrRequest?: CreateCsrRequest): Promise<CreateCsrResponse> {
        const options = ParamCreater().createCsr(createCsrRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除CSR。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除CSR
     * @param {string} id CSR的ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteCsr(deleteCsrRequest?: DeleteCsrRequest): Promise<DeleteCsrResponse> {
        const options = ParamCreater().deleteCsr(deleteCsrRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询CSR列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询CSR列表
     * @param {number} [limit] 每页条目数量，取值如下： - 10：每页显示10条证书信息。 - 20：每页显示20条证书信息。 - 50：每页显示50条证书信息。
     * @param {number} [offset] 偏移量。
     * @param {string} [name] csr名称。
     * @param {string} [privateKeyAlgo] 密钥算法的类型。取值如下： - RSA_2048 - RSA_3072 - RSA_4096 - EC_P256 - EC_P384 - SM2
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listCsr(listCsrRequest?: ListCsrRequest): Promise<ListCsrResponse> {
        const options = ParamCreater().listCsr(listCsrRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询CSR。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询CSR
     * @param {string} id CSR的ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showCsr(showCsrRequest?: ShowCsrRequest): Promise<ShowCsrResponse> {
        const options = ParamCreater().showCsr(showCsrRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询私钥。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询私钥
     * @param {string} id CSR的ID。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showCsrPrivateKey(showCsrPrivateKeyRequest?: ShowCsrPrivateKeyRequest): Promise<ShowCsrPrivateKeyResponse> {
        const options = ParamCreater().showCsrPrivateKey(showCsrPrivateKeyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新CSR。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新CSR
     * @param {string} id CSR的ID。
     * @param {UpdateCSRRequestBody} updateCSRRequestBody requestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateCsr(updateCsrRequest?: UpdateCsrRequest): Promise<UpdateCsrResponse> {
        const options = ParamCreater().updateCsr(updateCsrRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 上传CSR。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 上传CSR
     * @param {UploadCsrRequestBody} uploadCsrRequestBody requestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public uploadCsr(uploadCsrRequest?: UploadCsrRequest): Promise<UploadCsrResponse> {
        const options = ParamCreater().uploadCsr(uploadCsrRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 申请证书。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        applyCertificate(applyCertificateRequest?: ApplyCertificateRequest) {
            const options = {
                method: "POST",
                url: "/v3/scm/certificates/{certificate_id}/apply",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let certificateId;

            if (applyCertificateRequest !== null && applyCertificateRequest !== undefined) {
                if (applyCertificateRequest instanceof ApplyCertificateRequest) {
                    certificateId = applyCertificateRequest.certificateId;
                    body = applyCertificateRequest.body
                } else {
                    certificateId = applyCertificateRequest['certificate_id'];
                    body = applyCertificateRequest['body'];
                }
            }

        
            if (certificateId === null || certificateId === undefined) {
            throw new RequiredError('certificateId','Required parameter certificateId was null or undefined when calling applyCertificate.');
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
         * 批量创建或删除标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchCreateOrDeleteTags(batchCreateOrDeleteTagsRequest?: BatchCreateOrDeleteTagsRequest) {
            const options = {
                method: "POST",
                url: "/v3/scm/{resource_id}/tags/action",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let resourceId;

            if (batchCreateOrDeleteTagsRequest !== null && batchCreateOrDeleteTagsRequest !== undefined) {
                if (batchCreateOrDeleteTagsRequest instanceof BatchCreateOrDeleteTagsRequest) {
                    resourceId = batchCreateOrDeleteTagsRequest.resourceId;
                    body = batchCreateOrDeleteTagsRequest.body
                } else {
                    resourceId = batchCreateOrDeleteTagsRequest['resource_id'];
                    body = batchCreateOrDeleteTagsRequest['body'];
                }
            }

        
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling batchCreateOrDeleteTags.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 批量推送SSL证书到弹性负载均衡（Elastic Load Balance，简称ELB）、Web应用防火墙（Web Application Firewall，WAF）、CDN（Content Delivery Network，内容分发网络）等其它华为云产品中。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchPushCertificate(batchPushCertificateRequest?: BatchPushCertificateRequest) {
            const options = {
                method: "POST",
                url: "/v3/scm/certificates/{certificate_id}/batch-push",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let certificateId;

            if (batchPushCertificateRequest !== null && batchPushCertificateRequest !== undefined) {
                if (batchPushCertificateRequest instanceof BatchPushCertificateRequest) {
                    certificateId = batchPushCertificateRequest.certificateId;
                    body = batchPushCertificateRequest.body
                } else {
                    certificateId = batchPushCertificateRequest['certificate_id'];
                    body = batchPushCertificateRequest['body'];
                }
            }

        
            if (certificateId === null || certificateId === undefined) {
            throw new RequiredError('certificateId','Required parameter certificateId was null or undefined when calling batchPushCertificate.');
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
         * 撤回证书申请。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        cancelCertificateRequest(cancelCertificateRequestRequest?: CancelCertificateRequestRequest) {
            const options = {
                method: "POST",
                url: "/v3/scm/certificates/{certificate_id}/cancel-cert",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let certificateId;

            if (cancelCertificateRequestRequest !== null && cancelCertificateRequestRequest !== undefined) {
                if (cancelCertificateRequestRequest instanceof CancelCertificateRequestRequest) {
                    certificateId = cancelCertificateRequestRequest.certificateId;
                } else {
                    certificateId = cancelCertificateRequestRequest['certificate_id'];
                }
            }

        
            if (certificateId === null || certificateId === undefined) {
            throw new RequiredError('certificateId','Required parameter certificateId was null or undefined when calling cancelCertificateRequest.');
            }

            options.pathParams = { 'certificate_id': certificateId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createCertificateTag(createCertificateTagRequest?: CreateCertificateTagRequest) {
            const options = {
                method: "POST",
                url: "/v3/scm/{resource_id}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let resourceId;

            if (createCertificateTagRequest !== null && createCertificateTagRequest !== undefined) {
                if (createCertificateTagRequest instanceof CreateCertificateTagRequest) {
                    resourceId = createCertificateTagRequest.resourceId;
                    body = createCertificateTagRequest.body
                } else {
                    resourceId = createCertificateTagRequest['resource_id'];
                    body = createCertificateTagRequest['body'];
                }
            }

        
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling createCertificateTag.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除证书实例，即将证书资源从系统中删除。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteCertificate(deleteCertificateRequest?: DeleteCertificateRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/scm/certificates/{certificate_id}",
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
         * 部署SSL证书到弹性负载均衡（Elastic Load Balance，简称ELB）、Web应用防火墙（Web Application Firewall，WAF）、CDN（Content Delivery Network，内容分发网络）等其它华为云产品中。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deployCertificate(deployCertificateRequest?: DeployCertificateRequest) {
            const options = {
                method: "POST",
                url: "/v3/scm/certificates/{certificate_id}/deploy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let certificateId;

            if (deployCertificateRequest !== null && deployCertificateRequest !== undefined) {
                if (deployCertificateRequest instanceof DeployCertificateRequest) {
                    certificateId = deployCertificateRequest.certificateId;
                    body = deployCertificateRequest.body
                } else {
                    certificateId = deployCertificateRequest['certificate_id'];
                    body = deployCertificateRequest['body'];
                }
            }

        
            if (certificateId === null || certificateId === undefined) {
            throw new RequiredError('certificateId','Required parameter certificateId was null or undefined when calling deployCertificate.');
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
         * 导出证书。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        exportCertificate(exportCertificateRequest?: ExportCertificateRequest) {
            const options = {
                method: "POST",
                url: "/v3/scm/certificates/{certificate_id}/export",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let certificateId;

            if (exportCertificateRequest !== null && exportCertificateRequest !== undefined) {
                if (exportCertificateRequest instanceof ExportCertificateRequest) {
                    certificateId = exportCertificateRequest.certificateId;
                } else {
                    certificateId = exportCertificateRequest['certificate_id'];
                }
            }

        
            if (certificateId === null || certificateId === undefined) {
            throw new RequiredError('certificateId','Required parameter certificateId was null or undefined when calling exportCertificate.');
            }

            options.pathParams = { 'certificate_id': certificateId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 导入证书到CCM服务管理。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        importCertificate(importCertificateRequest?: ImportCertificateRequest) {
            const options = {
                method: "POST",
                url: "/v3/scm/certificates/import",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (importCertificateRequest !== null && importCertificateRequest !== undefined) {
                if (importCertificateRequest instanceof ImportCertificateRequest) {
                    body = importCertificateRequest.body
                } else {
                    body = importCertificateRequest['body'];
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
         * 查询所有标签列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAllTags() {
            const options = {
                method: "GET",
                url: "/v3/scm/tags",
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
         * 根据证书名称或绑定域名查询证书列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listCertificates(listCertificatesRequest?: ListCertificatesRequest) {
            const options = {
                method: "GET",
                url: "/v3/scm/certificates",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let offset;
            
            let sortDir;
            
            let sortKey;
            
            let status;
            
            let enterpriseProjectId;
            
            let deploySupport;
            
            let ownedBySelf;
            
            let expiredDaysSince;
            
            let content;

            if (listCertificatesRequest !== null && listCertificatesRequest !== undefined) {
                if (listCertificatesRequest instanceof ListCertificatesRequest) {
                    limit = listCertificatesRequest.limit;
                    offset = listCertificatesRequest.offset;
                    sortDir = listCertificatesRequest.sortDir;
                    sortKey = listCertificatesRequest.sortKey;
                    status = listCertificatesRequest.status;
                    enterpriseProjectId = listCertificatesRequest.enterpriseProjectId;
                    deploySupport = listCertificatesRequest.deploySupport;
                    ownedBySelf = listCertificatesRequest.ownedBySelf;
                    expiredDaysSince = listCertificatesRequest.expiredDaysSince;
                    content = listCertificatesRequest.content;
                } else {
                    limit = listCertificatesRequest['limit'];
                    offset = listCertificatesRequest['offset'];
                    sortDir = listCertificatesRequest['sort_dir'];
                    sortKey = listCertificatesRequest['sort_key'];
                    status = listCertificatesRequest['status'];
                    enterpriseProjectId = listCertificatesRequest['enterprise_project_id'];
                    deploySupport = listCertificatesRequest['deploy_support'];
                    ownedBySelf = listCertificatesRequest['owned_by_self'];
                    expiredDaysSince = listCertificatesRequest['expired_days_since'];
                    content = listCertificatesRequest['content'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (status !== null && status !== undefined) {
                localVarQueryParameter['status'] = status;
            }
            if (enterpriseProjectId !== null && enterpriseProjectId !== undefined) {
                localVarQueryParameter['enterprise_project_id'] = enterpriseProjectId;
            }
            if (deploySupport !== null && deploySupport !== undefined) {
                localVarQueryParameter['deploy_support'] = deploySupport;
            }
            if (ownedBySelf !== null && ownedBySelf !== undefined) {
                localVarQueryParameter['owned_by_self'] = ownedBySelf;
            }
            if (expiredDaysSince !== null && expiredDaysSince !== undefined) {
                localVarQueryParameter['expired_days_since'] = expiredDaysSince;
            }
            if (content !== null && content !== undefined) {
                localVarQueryParameter['content'] = content;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据标签查询证书列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listCertificatesByTag(listCertificatesByTagRequest?: ListCertificatesByTagRequest) {
            const options = {
                method: "POST",
                url: "/v3/scm/{resource_instances}/action",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let resourceInstances;

            if (listCertificatesByTagRequest !== null && listCertificatesByTagRequest !== undefined) {
                if (listCertificatesByTagRequest instanceof ListCertificatesByTagRequest) {
                    resourceInstances = listCertificatesByTagRequest.resourceInstances;
                    body = listCertificatesByTagRequest.body
                } else {
                    resourceInstances = listCertificatesByTagRequest['resource_instances'];
                    body = listCertificatesByTagRequest['body'];
                }
            }

        
            if (resourceInstances === null || resourceInstances === undefined) {
            throw new RequiredError('resourceInstances','Required parameter resourceInstances was null or undefined when calling listCertificatesByTag.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'resource_instances': resourceInstances, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询证书已部署的具体资源。针对已签发和上传的非国密证书。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listDeployedResources(listDeployedResourcesRequest?: ListDeployedResourcesRequest) {
            const options = {
                method: "POST",
                url: "/v3/scm/deployed-resources",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (listDeployedResourcesRequest !== null && listDeployedResourcesRequest !== undefined) {
                if (listDeployedResourcesRequest instanceof ListDeployedResourcesRequest) {
                    body = listDeployedResourcesRequest.body
                } else {
                    body = listDeployedResourcesRequest['body'];
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
         * 根据证书ID查询标签列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTagsByCertificate(listTagsByCertificateRequest?: ListTagsByCertificateRequest) {
            const options = {
                method: "GET",
                url: "/v3/scm/{resource_id}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let resourceId;

            if (listTagsByCertificateRequest !== null && listTagsByCertificateRequest !== undefined) {
                if (listTagsByCertificateRequest instanceof ListTagsByCertificateRequest) {
                    resourceId = listTagsByCertificateRequest.resourceId;
                } else {
                    resourceId = listTagsByCertificateRequest['resource_id'];
                }
            }

        
            if (resourceId === null || resourceId === undefined) {
            throw new RequiredError('resourceId','Required parameter resourceId was null or undefined when calling listTagsByCertificate.');
            }

            options.pathParams = { 'resource_id': resourceId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 推送SSL证书到弹性负载均衡（Elastic Load Balance，简称ELB）、Web应用防火墙（Web Application Firewall，WAF）、CDN（Content Delivery Network，内容分发网络）等其它华为云产品中。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        pushCertificate(pushCertificateRequest?: PushCertificateRequest) {
            const options = {
                method: "POST",
                url: "/v3/scm/certificates/{certificate_id}/push",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let certificateId;

            if (pushCertificateRequest !== null && pushCertificateRequest !== undefined) {
                if (pushCertificateRequest instanceof PushCertificateRequest) {
                    certificateId = pushCertificateRequest.certificateId;
                    body = pushCertificateRequest.body
                } else {
                    certificateId = pushCertificateRequest['certificate_id'];
                    body = pushCertificateRequest['body'];
                }
            }

        
            if (certificateId === null || certificateId === undefined) {
            throw new RequiredError('certificateId','Required parameter certificateId was null or undefined when calling pushCertificate.');
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
         * 查询某张证书的详细信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showCertificate(showCertificateRequest?: ShowCertificateRequest) {
            const options = {
                method: "GET",
                url: "/v3/scm/certificates/{certificate_id}",
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
         * 购买SSL证书。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        subscribeCertificate(subscribeCertificateRequest?: SubscribeCertificateRequest) {
            const options = {
                method: "POST",
                url: "/v3/scm/certificates/buy",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (subscribeCertificateRequest !== null && subscribeCertificateRequest !== undefined) {
                if (subscribeCertificateRequest instanceof SubscribeCertificateRequest) {
                    body = subscribeCertificateRequest.body
                } else {
                    body = subscribeCertificateRequest['body'];
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
         * 退订证书。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        unsubscribeCertificate(unsubscribeCertificateRequest?: UnsubscribeCertificateRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/scm/certificates/{cert_id}/unsubscribe",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let certId;

            if (unsubscribeCertificateRequest !== null && unsubscribeCertificateRequest !== undefined) {
                if (unsubscribeCertificateRequest instanceof UnsubscribeCertificateRequest) {
                    certId = unsubscribeCertificateRequest.certId;
                } else {
                    certId = unsubscribeCertificateRequest['cert_id'];
                }
            }

        
            if (certId === null || certId === undefined) {
            throw new RequiredError('certId','Required parameter certId was null or undefined when calling unsubscribeCertificate.');
            }

            options.pathParams = { 'cert_id': certId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建CSR。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createCsr(createCsrRequest?: CreateCsrRequest) {
            const options = {
                method: "POST",
                url: "/v3/scm/csr",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createCsrRequest !== null && createCsrRequest !== undefined) {
                if (createCsrRequest instanceof CreateCsrRequest) {
                    body = createCsrRequest.body
                } else {
                    body = createCsrRequest['body'];
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
         * 删除CSR。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteCsr(deleteCsrRequest?: DeleteCsrRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/scm/csr/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let id;

            if (deleteCsrRequest !== null && deleteCsrRequest !== undefined) {
                if (deleteCsrRequest instanceof DeleteCsrRequest) {
                    id = deleteCsrRequest.id;
                } else {
                    id = deleteCsrRequest['id'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling deleteCsr.');
            }

            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询CSR列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listCsr(listCsrRequest?: ListCsrRequest) {
            const options = {
                method: "GET",
                url: "/v3/scm/csr",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let offset;
            
            let name;
            
            let privateKeyAlgo;

            if (listCsrRequest !== null && listCsrRequest !== undefined) {
                if (listCsrRequest instanceof ListCsrRequest) {
                    limit = listCsrRequest.limit;
                    offset = listCsrRequest.offset;
                    name = listCsrRequest.name;
                    privateKeyAlgo = listCsrRequest.privateKeyAlgo;
                } else {
                    limit = listCsrRequest['limit'];
                    offset = listCsrRequest['offset'];
                    name = listCsrRequest['name'];
                    privateKeyAlgo = listCsrRequest['private_key_algo'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (name !== null && name !== undefined) {
                localVarQueryParameter['name'] = name;
            }
            if (privateKeyAlgo !== null && privateKeyAlgo !== undefined) {
                localVarQueryParameter['private_key_algo'] = privateKeyAlgo;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询CSR。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showCsr(showCsrRequest?: ShowCsrRequest) {
            const options = {
                method: "GET",
                url: "/v3/scm/csr/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let id;

            if (showCsrRequest !== null && showCsrRequest !== undefined) {
                if (showCsrRequest instanceof ShowCsrRequest) {
                    id = showCsrRequest.id;
                } else {
                    id = showCsrRequest['id'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling showCsr.');
            }

            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询私钥。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showCsrPrivateKey(showCsrPrivateKeyRequest?: ShowCsrPrivateKeyRequest) {
            const options = {
                method: "GET",
                url: "/v3/scm/csr/{id}/private-key",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let id;

            if (showCsrPrivateKeyRequest !== null && showCsrPrivateKeyRequest !== undefined) {
                if (showCsrPrivateKeyRequest instanceof ShowCsrPrivateKeyRequest) {
                    id = showCsrPrivateKeyRequest.id;
                } else {
                    id = showCsrPrivateKeyRequest['id'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling showCsrPrivateKey.');
            }

            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新CSR。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateCsr(updateCsrRequest?: UpdateCsrRequest) {
            const options = {
                method: "PUT",
                url: "/v3/scm/csr/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let id;

            if (updateCsrRequest !== null && updateCsrRequest !== undefined) {
                if (updateCsrRequest instanceof UpdateCsrRequest) {
                    id = updateCsrRequest.id;
                    body = updateCsrRequest.body
                } else {
                    id = updateCsrRequest['id'];
                    body = updateCsrRequest['body'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling updateCsr.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 上传CSR。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        uploadCsr(uploadCsrRequest?: UploadCsrRequest) {
            const options = {
                method: "POST",
                url: "/v3/scm/csr/upload",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (uploadCsrRequest !== null && uploadCsrRequest !== undefined) {
                if (uploadCsrRequest instanceof UploadCsrRequest) {
                    body = uploadCsrRequest.body
                } else {
                    body = uploadCsrRequest['body'];
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
    
    }
};

function newClient(client: HcClient): ScmClient {
    return new ScmClient(client);
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