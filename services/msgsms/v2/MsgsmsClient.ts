import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";
import FormData from 'form-data';

import { ApiTemplateVariable } from './model/ApiTemplateVariable';
import { CreateAppRequest } from './model/CreateAppRequest';
import { CreateAppResponse } from './model/CreateAppResponse';
import { CreateSignatureRequest } from './model/CreateSignatureRequest';
import { CreateSignatureResponse } from './model/CreateSignatureResponse';
import { CreateTemplateRequest } from './model/CreateTemplateRequest';
import { CreateTemplateResponse } from './model/CreateTemplateResponse';
import { DeleteSignatureRequest } from './model/DeleteSignatureRequest';
import { DeleteSignatureResponse } from './model/DeleteSignatureResponse';
import { DeleteTemplateRequest } from './model/DeleteTemplateRequest';
import { DeleteTemplateResponse } from './model/DeleteTemplateResponse';
import { EnableSignatureRequest } from './model/EnableSignatureRequest';
import { EnableSignatureResponse } from './model/EnableSignatureResponse';
import { ListAppDetailsRequest } from './model/ListAppDetailsRequest';
import { ListAppDetailsResponse } from './model/ListAppDetailsResponse';
import { ListSendCountryDetailsRequest } from './model/ListSendCountryDetailsRequest';
import { ListSendCountryDetailsResponse } from './model/ListSendCountryDetailsResponse';
import { ListSignatureDetailsRequest } from './model/ListSignatureDetailsRequest';
import { ListSignatureDetailsResponse } from './model/ListSignatureDetailsResponse';
import { ListTemplateDetailsRequest } from './model/ListTemplateDetailsRequest';
import { ListTemplateDetailsResponse } from './model/ListTemplateDetailsResponse';
import { ListTemplateVarilableDetailsRequest } from './model/ListTemplateVarilableDetailsRequest';
import { ListTemplateVarilableDetailsResponse } from './model/ListTemplateVarilableDetailsResponse';
import { ShowAppCountRequest } from './model/ShowAppCountRequest';
import { ShowAppCountResponse } from './model/ShowAppCountResponse';
import { ShowAppRequest } from './model/ShowAppRequest';
import { ShowAppResponse } from './model/ShowAppResponse';
import { ShowSignatureFileRequest } from './model/ShowSignatureFileRequest';
import { ShowSignatureFileResponse } from './model/ShowSignatureFileResponse';
import { ShowSignatureRequest } from './model/ShowSignatureRequest';
import { ShowSignatureResponse } from './model/ShowSignatureResponse';
import { ShowTemplateRequest } from './model/ShowTemplateRequest';
import { ShowTemplateResponse } from './model/ShowTemplateResponse';
import { SmsAppAddReq } from './model/SmsAppAddReq';
import { SmsAppQueryResp } from './model/SmsAppQueryResp';
import { SmsAppUpdateReq } from './model/SmsAppUpdateReq';
import { SmsCountryResp } from './model/SmsCountryResp';
import { SmsSignatureReq } from './model/SmsSignatureReq';
import { SmsSignatureResp } from './model/SmsSignatureResp';
import { SmsTemplateReq } from './model/SmsTemplateReq';
import { SmsTemplateResp } from './model/SmsTemplateResp';
import { SmsTemplateVariableAttrReq } from './model/SmsTemplateVariableAttrReq';
import { TenantBasic } from './model/TenantBasic';
import { UpdateAppRequest } from './model/UpdateAppRequest';
import { UpdateAppResponse } from './model/UpdateAppResponse';
import { UpdateSignatureRequest } from './model/UpdateSignatureRequest';
import { UpdateSignatureResponse } from './model/UpdateSignatureResponse';
import { UpdateTemplateRequest } from './model/UpdateTemplateRequest';
import { UpdateTemplateResponse } from './model/UpdateTemplateResponse';
import { UploadSignatureFileRequest } from './model/UploadSignatureFileRequest';
import { UploadSignatureFileRequestBody } from './model/UploadSignatureFileRequestBody';
import { UploadSignatureFileResponse } from './model/UploadSignatureFileResponse';

export class MsgsmsClient {
    public static newBuilder(): ClientBuilder<MsgsmsClient> {
            return new ClientBuilder<MsgsmsClient>(newClient);
    }

    private hcClient: HcClient;
    public constructor(client: HcClient) {
        this.hcClient = client;
    }

    public getPath() {
        return __dirname;
    }


    /**
     * 该接口用于用户创建应用信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建短信应用
     * @param {string} contentType 请求体参数类型，该字段必须设置为：application/json;charset&#x3D;utf8
     * @param {SmsAppAddReq} createAppRequestBody 请求Body参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createApp(createAppRequest?: CreateAppRequest): Promise<CreateAppResponse> {
        const options = ParamCreater().createApp(createAppRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于用户查询已创建的应用信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询短信应用
     * @param {string} contentType 请求体参数类型，该字段必须设置为：application/json;charset&#x3D;utf8
     * @param {string} [appName] 应用名称
     * @param {string} [startTime] 开始时间
     * @param {string} [endTime] 结束时间
     * @param {number} [limit] 数量
     * @param {number} [offset] 偏移量
     * @param {string} [region] 地域 1. cn：国内 2. intl：国际
     * @param {string} [sortDir] 排序方式 1. desc：降序 2. asc：升序
     * @param {string} [sortKey] 排序字段
     * @param {string} [status] 应用状态   1. CREATED：待上线。应用暂未创建成功，请稍候。   2. SUSPENDED：暂停。无法发起业务请求。当客户所发短信内容触发业务违规，或客户申请退订短信业务时，运营经理会将客户短信应用暂停。   3. LAUNCHED：正常。应用添加成功，可以正常使用。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listAppDetails(listAppDetailsRequest?: ListAppDetailsRequest): Promise<ListAppDetailsResponse> {
        const options = ParamCreater().listAppDetails(listAppDetailsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于用户查询应用详情信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取应用详情
     * @param {string} contentType 请求体参数类型，该字段必须设置为：application/json;charset&#x3D;utf8
     * @param {string} id 应用ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showApp(showAppRequest?: ShowAppRequest): Promise<ShowAppResponse> {
        const options = ParamCreater().showApp(showAppRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于用户查询应用使用的数量信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询应用数量
     * @param {string} contentType 请求体参数类型，该字段必须设置为：application/json;charset&#x3D;utf8
     * @param {string} region 地域 1. cn：国内 2. intl：国际
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showAppCount(showAppCountRequest?: ShowAppCountRequest): Promise<ShowAppCountResponse> {
        const options = ParamCreater().showAppCount(showAppCountRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于用户修改应用信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改短信应用
     * @param {string} contentType 请求体参数类型，该字段必须设置为：application/json;charset&#x3D;utf8
     * @param {string} id 应用主键ID
     * @param {SmsAppUpdateReq} updateAppRequestBody 请求Body参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateApp(updateAppRequest?: UpdateAppRequest): Promise<UpdateAppResponse> {
        const options = ParamCreater().updateApp(updateAppRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于用户创建签名。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建短信签名
     * @param {string} contentType 请求体参数类型，该字段必须设置为：application/json;charset&#x3D;utf8
     * @param {SmsSignatureReq} createSignatureRequestBody 请求Body参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createSignature(createSignatureRequest?: CreateSignatureRequest): Promise<CreateSignatureResponse> {
        const options = ParamCreater().createSignature(createSignatureRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于用户删除已创建的签名信息息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除短信签名
     * @param {string} contentType 请求体参数类型，该字段必须设置为：application/json;charset&#x3D;utf8
     * @param {string} id 签名ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteSignature(deleteSignatureRequest?: DeleteSignatureRequest): Promise<DeleteSignatureResponse> {
        const options = ParamCreater().deleteSignature(deleteSignatureRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于用户申请激活签名信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 申请激活签名
     * @param {string} contentType 请求体参数类型，该字段必须设置为：application/json;charset&#x3D;utf8
     * @param {string} id 签名ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public enableSignature(enableSignatureRequest?: EnableSignatureRequest): Promise<EnableSignatureResponse> {
        const options = ParamCreater().enableSignature(enableSignatureRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于用户查询已创建的短信签名信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询签名信息
     * @param {string} contentType 请求体参数类型，该字段必须设置为：application/json;charset&#x3D;utf8
     * @param {string} [appName] 应用名称
     * @param {string} [startTime] 开始时间
     * @param {string} [endTime] 结束时间
     * @param {number} [limit] 数量
     * @param {number} [offset] 偏移量
     * @param {string} [signatureId] 签名ID
     * @param {string} [signatureName] 签名名称
     * @param {string} [signatureType] 签名类型。支持枚举值： 1. VERIFY_CODE_TYPE: 验证码类 2. PROMOTION_TYPE: 推广类 3. NOTIFY_TYPE: 通知类
     * @param {string} [site] 地域
     * @param {string} [sortDir] 排序方式 1. desc：降序 2. asc：升序
     * @param {string} [sortKey] 排序字段
     * @param {string} [status] 状态 1. PENDING_REVIEW：待审核 2. PROCESSING：内容审核通过，签名处理中 3. REVIEW_PASSED：处理完毕 4. REVIEW_NOT_PASS：审核不通过 5. TO_BE_ACTIVATED：待激活 6. PENDING_ACTIVATE：激活审核中
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSignatureDetails(listSignatureDetailsRequest?: ListSignatureDetailsRequest): Promise<ListSignatureDetailsResponse> {
        const options = ParamCreater().listSignatureDetails(listSignatureDetailsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于用户查询签名详情信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取签名详情
     * @param {string} contentType 请求体参数类型，该字段必须设置为：application/json;charset&#x3D;utf8
     * @param {string} id 签名ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSignature(showSignatureRequest?: ShowSignatureRequest): Promise<ShowSignatureResponse> {
        const options = ParamCreater().showSignature(showSignatureRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于用户查询上传的文件信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询申请文件
     * @param {string} contentType 请求体参数类型，该字段必须设置为：application/json;charset&#x3D;utf8
     * @param {string} fileId 营业执照ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSignatureFile(showSignatureFileRequest?: ShowSignatureFileRequest): Promise<ShowSignatureFileResponse> {
        const options = ParamCreater().showSignatureFile(showSignatureFileRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于用户更新签名信息，目前仅支持审核不通过的短信签名重新修改。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改短信签名
     * @param {string} contentType 请求体参数类型，该字段必须设置为：application/json;charset&#x3D;utf8
     * @param {string} id 签名ID
     * @param {SmsSignatureReq} updateSignatureRequestBody 请求Body参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateSignature(updateSignatureRequest?: UpdateSignatureRequest): Promise<UpdateSignatureResponse> {
        const options = ParamCreater().updateSignature(updateSignatureRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于用户上传文件信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 上传申请文件
     * @param {string} contentType 请求体参数类型，该字段必须设置为：application/json;charset&#x3D;utf8
     * @param {any} file 营业执照文件
     * @param {string} [fileDesc] 描述
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public uploadSignatureFile(uploadSignatureFileRequest?: UploadSignatureFileRequest): Promise<UploadSignatureFileResponse> {
        const options = ParamCreater().uploadSignatureFile(uploadSignatureFileRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于用户创建模板。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建短信模板
     * @param {string} contentType 请求体参数类型，该字段必须设置为：application/json;charset&#x3D;utf8
     * @param {SmsTemplateReq} createTemplateRequestBody 请求Body参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createTemplate(createTemplateRequest?: CreateTemplateRequest): Promise<CreateTemplateResponse> {
        const options = ParamCreater().createTemplate(createTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于用户删除已创建的模板信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除短信模板
     * @param {string} contentType 请求体参数类型，该字段必须设置为：application/json;charset&#x3D;utf8
     * @param {string} id 模板ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteTemplate(deleteTemplateRequest?: DeleteTemplateRequest): Promise<DeleteTemplateResponse> {
        const options = ParamCreater().deleteTemplate(deleteTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于用户查询短信发送的国家信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询发送国家
     * @param {string} contentType 请求体参数类型，该字段必须设置为：application/json;charset&#x3D;utf8
     * @param {string} [countryNameEn] 国家(英文)
     * @param {string} [countryNameZh] 国家(中文)
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSendCountryDetails(listSendCountryDetailsRequest?: ListSendCountryDetailsRequest): Promise<ListSendCountryDetailsResponse> {
        const options = ParamCreater().listSendCountryDetails(listSendCountryDetailsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于用户查询已创建的模板信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询短信模板
     * @param {string} contentType 请求体参数类型，该字段必须设置为：application/json;charset&#x3D;utf8
     * @param {string} [appKey] 应用key
     * @param {string} [appName] 应用名称
     * @param {string} [startTime] 开始时间
     * @param {string} [endTime] 结束时间
     * @param {number} [limit] 数量
     * @param {number} [offset] 偏移量
     * @param {string} [flowStatus] 流程状态 1. Adopted: 通过 2. Reviewing: 审核中 3. Reject: 拒绝
     * @param {string} [hasVariable] 是否存在变量
     * @param {string} [region] 地域 1. cn：国内 2. intl：国际
     * @param {string} [signName] 签名名称
     * @param {string} [sortDir] 排序方式 1. desc：降序 2. asc：升序
     * @param {string} [sortKey] 排序字段
     * @param {string} [templateId] 模板ID
     * @param {string} [templateName] 模板名称
     * @param {string} [templateType] 模板类型 1. VERIFY_CODE_TYPE: 验证码类 2. PROMOTION_TYPE: 推广类 3. NOTIFY_TYPE: 通知类
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTemplateDetails(listTemplateDetailsRequest?: ListTemplateDetailsRequest): Promise<ListTemplateDetailsResponse> {
        const options = ParamCreater().listTemplateDetails(listTemplateDetailsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于用户查询模板参数。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询模板变量
     * @param {string} contentType 请求体参数类型，该字段必须设置为：application/json;charset&#x3D;utf8
     * @param {string} id 模板ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listTemplateVarilableDetails(listTemplateVarilableDetailsRequest?: ListTemplateVarilableDetailsRequest): Promise<ListTemplateVarilableDetailsResponse> {
        const options = ParamCreater().listTemplateVarilableDetails(listTemplateVarilableDetailsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于用户查询已创建的模板详情。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取模板详情
     * @param {string} contentType 请求体参数类型，该字段必须设置为：application/json;charset&#x3D;utf8
     * @param {string} id 模板ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showTemplate(showTemplateRequest?: ShowTemplateRequest): Promise<ShowTemplateResponse> {
        const options = ParamCreater().showTemplate(showTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 该接口用于用户修改模板信息，目前仅支持审核不通过的短信模板重新修改
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改短信模板
     * @param {string} contentType 请求体参数类型，该字段必须设置为：application/json;charset&#x3D;utf8
     * @param {string} id 模板ID
     * @param {SmsTemplateReq} updateTemplateRequestBody 请求Body参数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateTemplate(updateTemplateRequest?: UpdateTemplateRequest): Promise<UpdateTemplateResponse> {
        const options = ParamCreater().updateTemplate(updateTemplateRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 该接口用于用户创建应用信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createApp(createAppRequest?: CreateAppRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/msgsms/apps",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;

            if (createAppRequest !== null && createAppRequest !== undefined) {
                if (createAppRequest instanceof CreateAppRequest) {
                    contentType = createAppRequest.contentType;
                    body = createAppRequest.body
                } else {
                    contentType = createAppRequest['Content-Type'];
                    body = createAppRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于用户查询已创建的应用信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listAppDetails(listAppDetailsRequest?: ListAppDetailsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/msgsms/apps",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let appName;
            
            let startTime;
            
            let endTime;
            
            let limit;
            
            let offset;
            
            let region;
            
            let sortDir;
            
            let sortKey;
            
            let status;

            if (listAppDetailsRequest !== null && listAppDetailsRequest !== undefined) {
                if (listAppDetailsRequest instanceof ListAppDetailsRequest) {
                    contentType = listAppDetailsRequest.contentType;
                    appName = listAppDetailsRequest.appName;
                    startTime = listAppDetailsRequest.startTime;
                    endTime = listAppDetailsRequest.endTime;
                    limit = listAppDetailsRequest.limit;
                    offset = listAppDetailsRequest.offset;
                    region = listAppDetailsRequest.region;
                    sortDir = listAppDetailsRequest.sortDir;
                    sortKey = listAppDetailsRequest.sortKey;
                    status = listAppDetailsRequest.status;
                } else {
                    contentType = listAppDetailsRequest['Content-Type'];
                    appName = listAppDetailsRequest['app_name'];
                    startTime = listAppDetailsRequest['start_time'];
                    endTime = listAppDetailsRequest['end_time'];
                    limit = listAppDetailsRequest['limit'];
                    offset = listAppDetailsRequest['offset'];
                    region = listAppDetailsRequest['region'];
                    sortDir = listAppDetailsRequest['sort_dir'];
                    sortKey = listAppDetailsRequest['sort_key'];
                    status = listAppDetailsRequest['status'];
                }
            }

        
            if (appName !== null && appName !== undefined) {
                localVarQueryParameter['app_name'] = appName;
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (region !== null && region !== undefined) {
                localVarQueryParameter['region'] = region;
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
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于用户查询应用详情信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showApp(showAppRequest?: ShowAppRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/msgsms/apps/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let contentType;
            
            let id;

            if (showAppRequest !== null && showAppRequest !== undefined) {
                if (showAppRequest instanceof ShowAppRequest) {
                    contentType = showAppRequest.contentType;
                    id = showAppRequest.id;
                } else {
                    contentType = showAppRequest['Content-Type'];
                    id = showAppRequest['id'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling showApp.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于用户查询应用使用的数量信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showAppCount(showAppCountRequest?: ShowAppCountRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/msgsms/apps-count",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let region;

            if (showAppCountRequest !== null && showAppCountRequest !== undefined) {
                if (showAppCountRequest instanceof ShowAppCountRequest) {
                    contentType = showAppCountRequest.contentType;
                    region = showAppCountRequest.region;
                } else {
                    contentType = showAppCountRequest['Content-Type'];
                    region = showAppCountRequest['region'];
                }
            }

        
            if (region === null || region === undefined) {
                throw new RequiredError('region','Required parameter region was null or undefined when calling showAppCount.');
            }
            if (region !== null && region !== undefined) {
                localVarQueryParameter['region'] = region;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于用户修改应用信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateApp(updateAppRequest?: UpdateAppRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/msgsms/apps/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;
            
            let id;

            if (updateAppRequest !== null && updateAppRequest !== undefined) {
                if (updateAppRequest instanceof UpdateAppRequest) {
                    contentType = updateAppRequest.contentType;
                    id = updateAppRequest.id;
                    body = updateAppRequest.body
                } else {
                    contentType = updateAppRequest['Content-Type'];
                    id = updateAppRequest['id'];
                    body = updateAppRequest['body'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling updateApp.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于用户创建签名。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createSignature(createSignatureRequest?: CreateSignatureRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/msgsms/signatures",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;

            if (createSignatureRequest !== null && createSignatureRequest !== undefined) {
                if (createSignatureRequest instanceof CreateSignatureRequest) {
                    contentType = createSignatureRequest.contentType;
                    body = createSignatureRequest.body
                } else {
                    contentType = createSignatureRequest['Content-Type'];
                    body = createSignatureRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于用户删除已创建的签名信息息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteSignature(deleteSignatureRequest?: DeleteSignatureRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/msgsms/signatures/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let contentType;
            
            let id;

            if (deleteSignatureRequest !== null && deleteSignatureRequest !== undefined) {
                if (deleteSignatureRequest instanceof DeleteSignatureRequest) {
                    contentType = deleteSignatureRequest.contentType;
                    id = deleteSignatureRequest.id;
                } else {
                    contentType = deleteSignatureRequest['Content-Type'];
                    id = deleteSignatureRequest['id'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling deleteSignature.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于用户申请激活签名信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        enableSignature(enableSignatureRequest?: EnableSignatureRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/msgsms/signatures/{id}/active",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let contentType;
            
            let id;

            if (enableSignatureRequest !== null && enableSignatureRequest !== undefined) {
                if (enableSignatureRequest instanceof EnableSignatureRequest) {
                    contentType = enableSignatureRequest.contentType;
                    id = enableSignatureRequest.id;
                } else {
                    contentType = enableSignatureRequest['Content-Type'];
                    id = enableSignatureRequest['id'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling enableSignature.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于用户查询已创建的短信签名信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSignatureDetails(listSignatureDetailsRequest?: ListSignatureDetailsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/msgsms/signatures",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let appName;
            
            let startTime;
            
            let endTime;
            
            let limit;
            
            let offset;
            
            let signatureId;
            
            let signatureName;
            
            let signatureType;
            
            let site;
            
            let sortDir;
            
            let sortKey;
            
            let status;

            if (listSignatureDetailsRequest !== null && listSignatureDetailsRequest !== undefined) {
                if (listSignatureDetailsRequest instanceof ListSignatureDetailsRequest) {
                    contentType = listSignatureDetailsRequest.contentType;
                    appName = listSignatureDetailsRequest.appName;
                    startTime = listSignatureDetailsRequest.startTime;
                    endTime = listSignatureDetailsRequest.endTime;
                    limit = listSignatureDetailsRequest.limit;
                    offset = listSignatureDetailsRequest.offset;
                    signatureId = listSignatureDetailsRequest.signatureId;
                    signatureName = listSignatureDetailsRequest.signatureName;
                    signatureType = listSignatureDetailsRequest.signatureType;
                    site = listSignatureDetailsRequest.site;
                    sortDir = listSignatureDetailsRequest.sortDir;
                    sortKey = listSignatureDetailsRequest.sortKey;
                    status = listSignatureDetailsRequest.status;
                } else {
                    contentType = listSignatureDetailsRequest['Content-Type'];
                    appName = listSignatureDetailsRequest['app_name'];
                    startTime = listSignatureDetailsRequest['start_time'];
                    endTime = listSignatureDetailsRequest['end_time'];
                    limit = listSignatureDetailsRequest['limit'];
                    offset = listSignatureDetailsRequest['offset'];
                    signatureId = listSignatureDetailsRequest['signature_id'];
                    signatureName = listSignatureDetailsRequest['signature_name'];
                    signatureType = listSignatureDetailsRequest['signature_type'];
                    site = listSignatureDetailsRequest['site'];
                    sortDir = listSignatureDetailsRequest['sort_dir'];
                    sortKey = listSignatureDetailsRequest['sort_key'];
                    status = listSignatureDetailsRequest['status'];
                }
            }

        
            if (appName !== null && appName !== undefined) {
                localVarQueryParameter['app_name'] = appName;
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (signatureId !== null && signatureId !== undefined) {
                localVarQueryParameter['signature_id'] = signatureId;
            }
            if (signatureName !== null && signatureName !== undefined) {
                localVarQueryParameter['signature_name'] = signatureName;
            }
            if (signatureType !== null && signatureType !== undefined) {
                localVarQueryParameter['signature_type'] = signatureType;
            }
            if (site !== null && site !== undefined) {
                localVarQueryParameter['site'] = site;
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
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于用户查询签名详情信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSignature(showSignatureRequest?: ShowSignatureRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/msgsms/signatures/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let contentType;
            
            let id;

            if (showSignatureRequest !== null && showSignatureRequest !== undefined) {
                if (showSignatureRequest instanceof ShowSignatureRequest) {
                    contentType = showSignatureRequest.contentType;
                    id = showSignatureRequest.id;
                } else {
                    contentType = showSignatureRequest['Content-Type'];
                    id = showSignatureRequest['id'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling showSignature.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于用户查询上传的文件信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSignatureFile(showSignatureFileRequest?: ShowSignatureFileRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/msgsms/upload-files",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let fileId;

            if (showSignatureFileRequest !== null && showSignatureFileRequest !== undefined) {
                if (showSignatureFileRequest instanceof ShowSignatureFileRequest) {
                    contentType = showSignatureFileRequest.contentType;
                    fileId = showSignatureFileRequest.fileId;
                } else {
                    contentType = showSignatureFileRequest['Content-Type'];
                    fileId = showSignatureFileRequest['file_id'];
                }
            }

        
            if (fileId === null || fileId === undefined) {
                throw new RequiredError('fileId','Required parameter fileId was null or undefined when calling showSignatureFile.');
            }
            if (fileId !== null && fileId !== undefined) {
                localVarQueryParameter['file_id'] = fileId;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于用户更新签名信息，目前仅支持审核不通过的短信签名重新修改。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateSignature(updateSignatureRequest?: UpdateSignatureRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/msgsms/signatures/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;
            
            let id;

            if (updateSignatureRequest !== null && updateSignatureRequest !== undefined) {
                if (updateSignatureRequest instanceof UpdateSignatureRequest) {
                    contentType = updateSignatureRequest.contentType;
                    id = updateSignatureRequest.id;
                    body = updateSignatureRequest.body
                } else {
                    contentType = updateSignatureRequest['Content-Type'];
                    id = updateSignatureRequest['id'];
                    body = updateSignatureRequest['body'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling updateSignature.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于用户上传文件信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        uploadSignatureFile(uploadSignatureFileRequest?: UploadSignatureFileRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/msgsms/upload-files",
                contentType: "multipart/form-data",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            const localVarFormParams = new FormData();
            
            let contentType;
            let file;
            
            
            let fileDesc;

            if (uploadSignatureFileRequest !== null && uploadSignatureFileRequest !== undefined) {
                if (uploadSignatureFileRequest instanceof UploadSignatureFileRequest) {
                    contentType = uploadSignatureFileRequest.contentType;
                    file = uploadSignatureFileRequest.body?.file;
                    fileDesc = uploadSignatureFileRequest.fileDesc;
                } else {
                    contentType = uploadSignatureFileRequest['Content-Type'];
                    file = uploadSignatureFileRequest['body']['file'];
                    fileDesc = uploadSignatureFileRequest['file_desc'];
                }
            }

        
            if (file === null || file === undefined) {
            throw new RequiredError('file','Required parameter file was null or undefined when calling uploadSignatureFile.');
            }
            if (fileDesc !== null && fileDesc !== undefined) {
                localVarQueryParameter['file_desc'] = fileDesc;
            }
            if (file !== undefined) { 
                localVarFormParams.append('file', file as any);
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/x-www-form-urlencoded';
            localVarHeaderParameter['Content-Type'] = 'multipart/form-data';
            options.data = localVarFormParams;
            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于用户创建模板。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createTemplate(createTemplateRequest?: CreateTemplateRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/msgsms/templates",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;

            if (createTemplateRequest !== null && createTemplateRequest !== undefined) {
                if (createTemplateRequest instanceof CreateTemplateRequest) {
                    contentType = createTemplateRequest.contentType;
                    body = createTemplateRequest.body
                } else {
                    contentType = createTemplateRequest['Content-Type'];
                    body = createTemplateRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于用户删除已创建的模板信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteTemplate(deleteTemplateRequest?: DeleteTemplateRequest) {
            const options = {
                method: "DELETE",
                url: "/v2/{project_id}/msgsms/templates/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let contentType;
            
            let id;

            if (deleteTemplateRequest !== null && deleteTemplateRequest !== undefined) {
                if (deleteTemplateRequest instanceof DeleteTemplateRequest) {
                    contentType = deleteTemplateRequest.contentType;
                    id = deleteTemplateRequest.id;
                } else {
                    contentType = deleteTemplateRequest['Content-Type'];
                    id = deleteTemplateRequest['id'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling deleteTemplate.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于用户查询短信发送的国家信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSendCountryDetails(listSendCountryDetailsRequest?: ListSendCountryDetailsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/msgsms/country",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let countryNameEn;
            
            let countryNameZh;

            if (listSendCountryDetailsRequest !== null && listSendCountryDetailsRequest !== undefined) {
                if (listSendCountryDetailsRequest instanceof ListSendCountryDetailsRequest) {
                    contentType = listSendCountryDetailsRequest.contentType;
                    countryNameEn = listSendCountryDetailsRequest.countryNameEn;
                    countryNameZh = listSendCountryDetailsRequest.countryNameZh;
                } else {
                    contentType = listSendCountryDetailsRequest['Content-Type'];
                    countryNameEn = listSendCountryDetailsRequest['country_name_en'];
                    countryNameZh = listSendCountryDetailsRequest['country_name_zh'];
                }
            }

        
            if (countryNameEn !== null && countryNameEn !== undefined) {
                localVarQueryParameter['country_name_en'] = countryNameEn;
            }
            if (countryNameZh !== null && countryNameZh !== undefined) {
                localVarQueryParameter['country_name_zh'] = countryNameZh;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于用户查询已创建的模板信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTemplateDetails(listTemplateDetailsRequest?: ListTemplateDetailsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/msgsms/templates",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let contentType;
            
            let appKey;
            
            let appName;
            
            let startTime;
            
            let endTime;
            
            let limit;
            
            let offset;
            
            let flowStatus;
            
            let hasVariable;
            
            let region;
            
            let signName;
            
            let sortDir;
            
            let sortKey;
            
            let templateId;
            
            let templateName;
            
            let templateType;

            if (listTemplateDetailsRequest !== null && listTemplateDetailsRequest !== undefined) {
                if (listTemplateDetailsRequest instanceof ListTemplateDetailsRequest) {
                    contentType = listTemplateDetailsRequest.contentType;
                    appKey = listTemplateDetailsRequest.appKey;
                    appName = listTemplateDetailsRequest.appName;
                    startTime = listTemplateDetailsRequest.startTime;
                    endTime = listTemplateDetailsRequest.endTime;
                    limit = listTemplateDetailsRequest.limit;
                    offset = listTemplateDetailsRequest.offset;
                    flowStatus = listTemplateDetailsRequest.flowStatus;
                    hasVariable = listTemplateDetailsRequest.hasVariable;
                    region = listTemplateDetailsRequest.region;
                    signName = listTemplateDetailsRequest.signName;
                    sortDir = listTemplateDetailsRequest.sortDir;
                    sortKey = listTemplateDetailsRequest.sortKey;
                    templateId = listTemplateDetailsRequest.templateId;
                    templateName = listTemplateDetailsRequest.templateName;
                    templateType = listTemplateDetailsRequest.templateType;
                } else {
                    contentType = listTemplateDetailsRequest['Content-Type'];
                    appKey = listTemplateDetailsRequest['app_key'];
                    appName = listTemplateDetailsRequest['app_name'];
                    startTime = listTemplateDetailsRequest['start_time'];
                    endTime = listTemplateDetailsRequest['end_time'];
                    limit = listTemplateDetailsRequest['limit'];
                    offset = listTemplateDetailsRequest['offset'];
                    flowStatus = listTemplateDetailsRequest['flow_status'];
                    hasVariable = listTemplateDetailsRequest['has_variable'];
                    region = listTemplateDetailsRequest['region'];
                    signName = listTemplateDetailsRequest['sign_name'];
                    sortDir = listTemplateDetailsRequest['sort_dir'];
                    sortKey = listTemplateDetailsRequest['sort_key'];
                    templateId = listTemplateDetailsRequest['template_id'];
                    templateName = listTemplateDetailsRequest['template_name'];
                    templateType = listTemplateDetailsRequest['template_type'];
                }
            }

        
            if (appKey !== null && appKey !== undefined) {
                localVarQueryParameter['app_key'] = appKey;
            }
            if (appName !== null && appName !== undefined) {
                localVarQueryParameter['app_name'] = appName;
            }
            if (startTime !== null && startTime !== undefined) {
                localVarQueryParameter['start_time'] = startTime;
            }
            if (endTime !== null && endTime !== undefined) {
                localVarQueryParameter['end_time'] = endTime;
            }
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }
            if (flowStatus !== null && flowStatus !== undefined) {
                localVarQueryParameter['flow_status'] = flowStatus;
            }
            if (hasVariable !== null && hasVariable !== undefined) {
                localVarQueryParameter['has_variable'] = hasVariable;
            }
            if (region !== null && region !== undefined) {
                localVarQueryParameter['region'] = region;
            }
            if (signName !== null && signName !== undefined) {
                localVarQueryParameter['sign_name'] = signName;
            }
            if (sortDir !== null && sortDir !== undefined) {
                localVarQueryParameter['sort_dir'] = sortDir;
            }
            if (sortKey !== null && sortKey !== undefined) {
                localVarQueryParameter['sort_key'] = sortKey;
            }
            if (templateId !== null && templateId !== undefined) {
                localVarQueryParameter['template_id'] = templateId;
            }
            if (templateName !== null && templateName !== undefined) {
                localVarQueryParameter['template_name'] = templateName;
            }
            if (templateType !== null && templateType !== undefined) {
                localVarQueryParameter['template_type'] = templateType;
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于用户查询模板参数。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listTemplateVarilableDetails(listTemplateVarilableDetailsRequest?: ListTemplateVarilableDetailsRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/msgsms/templates/{id}/varilable",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let contentType;
            
            let id;

            if (listTemplateVarilableDetailsRequest !== null && listTemplateVarilableDetailsRequest !== undefined) {
                if (listTemplateVarilableDetailsRequest instanceof ListTemplateVarilableDetailsRequest) {
                    contentType = listTemplateVarilableDetailsRequest.contentType;
                    id = listTemplateVarilableDetailsRequest.id;
                } else {
                    contentType = listTemplateVarilableDetailsRequest['Content-Type'];
                    id = listTemplateVarilableDetailsRequest['id'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling listTemplateVarilableDetails.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于用户查询已创建的模板详情。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showTemplate(showTemplateRequest?: ShowTemplateRequest) {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/msgsms/templates/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let contentType;
            
            let id;

            if (showTemplateRequest !== null && showTemplateRequest !== undefined) {
                if (showTemplateRequest instanceof ShowTemplateRequest) {
                    contentType = showTemplateRequest.contentType;
                    id = showTemplateRequest.id;
                } else {
                    contentType = showTemplateRequest['Content-Type'];
                    id = showTemplateRequest['id'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling showTemplate.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }

            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 该接口用于用户修改模板信息，目前仅支持审核不通过的短信模板重新修改
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateTemplate(updateTemplateRequest?: UpdateTemplateRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/msgsms/templates/{id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let contentType;
            
            let id;

            if (updateTemplateRequest !== null && updateTemplateRequest !== undefined) {
                if (updateTemplateRequest instanceof UpdateTemplateRequest) {
                    contentType = updateTemplateRequest.contentType;
                    id = updateTemplateRequest.id;
                    body = updateTemplateRequest.body
                } else {
                    contentType = updateTemplateRequest['Content-Type'];
                    id = updateTemplateRequest['id'];
                    body = updateTemplateRequest['body'];
                }
            }

        
            if (id === null || id === undefined) {
            throw new RequiredError('id','Required parameter id was null or undefined when calling updateTemplate.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            if (contentType !== undefined && contentType !== null) {
                localVarHeaderParameter['Content-Type'] = String(contentType);
            }
            localVarHeaderParameter['Content-Type'] = 'application/json';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'id': id, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): MsgsmsClient {
    return new MsgsmsClient(client);
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