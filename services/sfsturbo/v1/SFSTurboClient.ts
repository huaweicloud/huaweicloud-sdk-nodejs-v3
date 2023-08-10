import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { ActionProgress } from './model/ActionProgress';
import { BatchAddSharedTagsRequest } from './model/BatchAddSharedTagsRequest';
import { BatchAddSharedTagsRequestBody } from './model/BatchAddSharedTagsRequestBody';
import { BatchAddSharedTagsResponse } from './model/BatchAddSharedTagsResponse';
import { BssInfo } from './model/BssInfo';
import { BssInfoExtend } from './model/BssInfoExtend';
import { ChangeSecurityGroup } from './model/ChangeSecurityGroup';
import { ChangeSecurityGroupRequest } from './model/ChangeSecurityGroupRequest';
import { ChangeSecurityGroupRequestBody } from './model/ChangeSecurityGroupRequestBody';
import { ChangeSecurityGroupResponse } from './model/ChangeSecurityGroupResponse';
import { ChangeShareNameReq } from './model/ChangeShareNameReq';
import { ChangeShareNameRequest } from './model/ChangeShareNameRequest';
import { ChangeShareNameResponse } from './model/ChangeShareNameResponse';
import { CreateFsDirQuotaRequest } from './model/CreateFsDirQuotaRequest';
import { CreateFsDirQuotaRequestBody } from './model/CreateFsDirQuotaRequestBody';
import { CreateFsDirQuotaResponse } from './model/CreateFsDirQuotaResponse';
import { CreateFsDirRequest } from './model/CreateFsDirRequest';
import { CreateFsDirRequestBody } from './model/CreateFsDirRequestBody';
import { CreateFsDirResponse } from './model/CreateFsDirResponse';
import { CreateShareRequest } from './model/CreateShareRequest';
import { CreateShareRequestBody } from './model/CreateShareRequestBody';
import { CreateShareResponse } from './model/CreateShareResponse';
import { CreateSharedTagRequest } from './model/CreateSharedTagRequest';
import { CreateSharedTagRequestBody } from './model/CreateSharedTagRequestBody';
import { CreateSharedTagResponse } from './model/CreateSharedTagResponse';
import { DeleteFsDirQuotaRequest } from './model/DeleteFsDirQuotaRequest';
import { DeleteFsDirQuotaRequestBody } from './model/DeleteFsDirQuotaRequestBody';
import { DeleteFsDirQuotaResponse } from './model/DeleteFsDirQuotaResponse';
import { DeleteFsDirRequest } from './model/DeleteFsDirRequest';
import { DeleteFsDirRequestBody } from './model/DeleteFsDirRequestBody';
import { DeleteFsDirResponse } from './model/DeleteFsDirResponse';
import { DeleteShareRequest } from './model/DeleteShareRequest';
import { DeleteShareResponse } from './model/DeleteShareResponse';
import { DeleteSharedTagRequest } from './model/DeleteSharedTagRequest';
import { DeleteSharedTagResponse } from './model/DeleteSharedTagResponse';
import { ExpandShareRequest } from './model/ExpandShareRequest';
import { ExpandShareRequestBody } from './model/ExpandShareRequestBody';
import { ExpandShareResponse } from './model/ExpandShareResponse';
import { Extend } from './model/Extend';
import { ListSharedTagsRequest } from './model/ListSharedTagsRequest';
import { ListSharedTagsResponse } from './model/ListSharedTagsResponse';
import { ListSharesRequest } from './model/ListSharesRequest';
import { ListSharesResponse } from './model/ListSharesResponse';
import { Metadata } from './model/Metadata';
import { ResourceTag } from './model/ResourceTag';
import { Share } from './model/Share';
import { ShareName } from './model/ShareName';
import { Shares } from './model/Shares';
import { ShowFsDirQuotaRequest } from './model/ShowFsDirQuotaRequest';
import { ShowFsDirQuotaResponse } from './model/ShowFsDirQuotaResponse';
import { ShowFsDirRequest } from './model/ShowFsDirRequest';
import { ShowFsDirResponse } from './model/ShowFsDirResponse';
import { ShowShareRequest } from './model/ShowShareRequest';
import { ShowShareResponse } from './model/ShowShareResponse';
import { ShowSharedTagsRequest } from './model/ShowSharedTagsRequest';
import { ShowSharedTagsResponse } from './model/ShowSharedTagsResponse';
import { Tag } from './model/Tag';
import { UpdateFsDirQuotaRequest } from './model/UpdateFsDirQuotaRequest';
import { UpdateFsDirQuotaRequestBody } from './model/UpdateFsDirQuotaRequestBody';
import { UpdateFsDirQuotaResponse } from './model/UpdateFsDirQuotaResponse';

export class SFSTurboClient {
    public static newBuilder(): ClientBuilder<SFSTurboClient> {
            return new ClientBuilder<SFSTurboClient>(newClient);
    }

    private hcClient: HcClient;
    public constructor(client: HcClient) {
        this.hcClient = client;
    }

    public getPath() {
        return __dirname;
    }


    /**
     * 指定共享批量添加标签。
     * 
     * 一个共享上最多有10个标签。
     * 一个共享上的多个标签的key不允许重复。
     * 此接口为幂等接口：如果要添加的key在共享上已存在，则覆盖更新标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量添加共享标签
     * @param {string} shareId 共享ID
     * @param {BatchAddSharedTagsRequestBody} batchAddSharedTagsRequestBody 批量添加共享标签请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchAddSharedTags(batchAddSharedTagsRequest?: BatchAddSharedTagsRequest): Promise<BatchAddSharedTagsResponse> {
        const options = ParamCreater().batchAddSharedTags(batchAddSharedTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改SFS Turbo文件系统绑定的安全组。修改安全组为异步任务，可以通过“查询单个文件系统”返回的子状态字段“sub_status”来判断是否修改安全组状态，子状态为“232”即为修改安全组成功。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改文件系统绑定的安全组
     * @param {string} shareId 文件系统ID
     * @param {ChangeSecurityGroupRequestBody} changeSecurityGroup change_security_group对象
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public changeSecurityGroup(changeSecurityGroupRequest?: ChangeSecurityGroupRequest): Promise<ChangeSecurityGroupResponse> {
        const options = ParamCreater().changeSecurityGroup(changeSecurityGroupRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改文件系统名称
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改文件系统名称
     * @param {string} shareId 文件系统ID
     * @param {ChangeShareNameReq} changeName 修改文件系统名称请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public changeShareName(changeShareNameRequest?: ChangeShareNameRequest): Promise<ChangeShareNameResponse> {
        const options = ParamCreater().changeShareName(changeShareNameRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建目录 (目前已上线的局点：上海一、上海二、北京二、北京四、乌兰察布一、广州、贵阳一、中国-香港、亚太-新加坡、亚太-曼谷)
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建目录
     * @param {string} shareId 文件系统id
     * @param {CreateFsDirRequestBody} createFsDirRequestBody 文件系统目录
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createFsDir(createFsDirRequest?: CreateFsDirRequest): Promise<CreateFsDirResponse> {
        const options = ParamCreater().createFsDir(createFsDirRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建目标文件夹quota。只支持对空目录设置目录quota (目前已上线的局点：上海一、上海二、北京二、北京四、乌兰察布一、广州、贵阳一、中国-香港、亚太-新加坡、亚太-曼谷)
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建目标文件夹quota
     * @param {string} shareId 文件系统id
     * @param {CreateFsDirQuotaRequestBody} createFsDirQuotaRequestBody 目标文件夹quota信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createFsDirQuota(createFsDirQuotaRequest?: CreateFsDirQuotaRequest): Promise<CreateFsDirQuotaResponse> {
        const options = ParamCreater().createFsDirQuota(createFsDirQuotaRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建文件系统。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建文件系统
     * @param {CreateShareRequestBody} createShareRequestBody 创建文件系统请求体。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createShare(createShareRequest?: CreateShareRequest): Promise<CreateShareResponse> {
        const options = ParamCreater().createShare(createShareRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 指定共享添加一个标签。
     * 一个共享上最多有10个标签。
     * 一个共享上的多个标签的key不允许重复。
     * 此接口为幂等接口：如果要添加的key在共享上已存在，则覆盖更新标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建共享标签
     * @param {string} shareId 共享ID
     * @param {CreateSharedTagRequestBody} createSharedTagRequestBody 标签
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createSharedTag(createSharedTagRequest?: CreateSharedTagRequest): Promise<CreateSharedTagResponse> {
        const options = ParamCreater().createSharedTag(createSharedTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除文件系统目录 (目前已上线的局点：上海一、上海二、北京二、北京四、乌兰察布一、广州、贵阳一、中国-香港、亚太-新加坡、亚太-曼谷)
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除文件系统目录
     * @param {string} shareId 文件系统id
     * @param {DeleteFsDirRequestBody} deleteFsDirRequestBody 文件系统目录
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteFsDir(deleteFsDirRequest?: DeleteFsDirRequest): Promise<DeleteFsDirResponse> {
        const options = ParamCreater().deleteFsDir(deleteFsDirRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除目标文件夹quota。只支持对空目录进行删除quota (目前已上线的局点：上海一、上海二、北京二、北京四、乌兰察布一、广州、贵阳一、中国-香港、亚太-新加坡、亚太-曼谷)
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除目标文件夹quota
     * @param {string} shareId 文件系统id
     * @param {DeleteFsDirQuotaRequestBody} deleteFsDirQuotaRequestBody 删除目录quota请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteFsDirQuota(deleteFsDirQuotaRequest?: DeleteFsDirQuotaRequest): Promise<DeleteFsDirQuotaResponse> {
        const options = ParamCreater().deleteFsDirQuota(deleteFsDirQuotaRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除文件系统。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除文件系统
     * @param {string} shareId 文件系统ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteShare(deleteShareRequest?: DeleteShareRequest): Promise<DeleteShareResponse> {
        const options = ParamCreater().deleteShare(deleteShareRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 指定共享删除一个标签。当共享中不存在指定要删除的key时，接口调用将会返回404错误。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除共享标签
     * @param {string} shareId 共享ID
     * @param {string} key 标签的键,最大长度36个字符。  key不能为空，不能包含非打印字符ASCII(0-31)，“&#x3D;”,“*”,“&lt;”,“&gt;”,“\\”,“,”,“|”,“/”。只能包含大写字母、小写字母、数字，特殊字符\&quot;-\&quot;和\&quot;_\&quot;。  说明：调用删除共享标签接口删除标签时，如果标签的键中存在不被URL直接解析的特殊字符，需要对标签的键进行URL转义处理。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteSharedTag(deleteSharedTagRequest?: DeleteSharedTagRequest): Promise<DeleteSharedTagResponse> {
        const options = ParamCreater().deleteSharedTag(deleteSharedTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 扩容文件系统。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 扩容文件系统
     * @param {string} shareId 文件系统ID
     * @param {ExpandShareRequestBody} expandShareRequestBody 扩容请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public expandShare(expandShareRequest?: ExpandShareRequest): Promise<ExpandShareResponse> {
        const options = ParamCreater().expandShare(expandShareRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询租户所有共享的标签集合。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询租户所有共享的标签
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSharedTags(listSharedTagsRequest?: ListSharedTagsRequest): Promise<ListSharedTagsResponse> {
        const options = ParamCreater().listSharedTags();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取文件系统列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取文件系统列表
     * @param {number} [limit] 返回的文件系统个数，最大值为200。
     * @param {number} [offset] 文件系统查询个数的偏移量。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listShares(listSharesRequest?: ListSharesRequest): Promise<ListSharesResponse> {
        const options = ParamCreater().listShares(listSharesRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询目录是否存在 (目前已上线的局点：上海一、上海二、北京二、北京四、乌兰察布一、广州、贵阳一、中国-香港、亚太-新加坡、亚太-曼谷)
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询目录是否存在
     * @param {string} shareId 文件系统id
     * @param {string} path 需要查询的目录的全路径
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showFsDir(showFsDirRequest?: ShowFsDirRequest): Promise<ShowFsDirResponse> {
        const options = ParamCreater().showFsDir(showFsDirRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询目标文件夹quota (目前已上线的局点：上海一、上海二、北京二、北京四、乌兰察布一、广州、贵阳一、中国-香港、亚太-新加坡、亚太-曼谷)
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询目标文件夹quota
     * @param {string} shareId 文件系统id
     * @param {string} path 合法的已存在的目录的全路径
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showFsDirQuota(showFsDirQuotaRequest?: ShowFsDirQuotaRequest): Promise<ShowFsDirQuotaResponse> {
        const options = ParamCreater().showFsDirQuota(showFsDirQuotaRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询SFS Turbo文件系统详细信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询文件系统详细信息
     * @param {string} shareId 文件系统ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showShare(showShareRequest?: ShowShareRequest): Promise<ShowShareResponse> {
        const options = ParamCreater().showShare(showShareRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询指定共享的所有标签信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询共享标签
     * @param {string} shareId 共享ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showSharedTags(showSharedTagsRequest?: ShowSharedTagsRequest): Promise<ShowSharedTagsResponse> {
        const options = ParamCreater().showSharedTags(showSharedTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新目标文件夹quota (目前已上线的局点：上海一、上海二、北京二、北京四、乌兰察布一、广州、贵阳一、中国-香港、亚太-新加坡、亚太-曼谷)
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新目标文件夹quota
     * @param {string} shareId 文件系统id
     * @param {UpdateFsDirQuotaRequestBody} updateFsDirQuotaRequestBody 目标文件夹quota信息
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateFsDirQuota(updateFsDirQuotaRequest?: UpdateFsDirQuotaRequest): Promise<UpdateFsDirQuotaResponse> {
        const options = ParamCreater().updateFsDirQuota(updateFsDirQuotaRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 指定共享批量添加标签。
         * 
         * 一个共享上最多有10个标签。
         * 一个共享上的多个标签的key不允许重复。
         * 此接口为幂等接口：如果要添加的key在共享上已存在，则覆盖更新标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchAddSharedTags(batchAddSharedTagsRequest?: BatchAddSharedTagsRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/sfs-turbo/{share_id}/tags/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let shareId;

            if (batchAddSharedTagsRequest !== null && batchAddSharedTagsRequest !== undefined) {
                if (batchAddSharedTagsRequest instanceof BatchAddSharedTagsRequest) {
                    shareId = batchAddSharedTagsRequest.shareId;
                    body = batchAddSharedTagsRequest.body
                } else {
                    shareId = batchAddSharedTagsRequest['share_id'];
                    body = batchAddSharedTagsRequest['body'];
                }
            }

        
            if (shareId === null || shareId === undefined) {
            throw new RequiredError('shareId','Required parameter shareId was null or undefined when calling batchAddSharedTags.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'share_id': shareId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改SFS Turbo文件系统绑定的安全组。修改安全组为异步任务，可以通过“查询单个文件系统”返回的子状态字段“sub_status”来判断是否修改安全组状态，子状态为“232”即为修改安全组成功。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        changeSecurityGroup(changeSecurityGroupRequest?: ChangeSecurityGroupRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/sfs-turbo/shares/{share_id}/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let shareId;

            if (changeSecurityGroupRequest !== null && changeSecurityGroupRequest !== undefined) {
                if (changeSecurityGroupRequest instanceof ChangeSecurityGroupRequest) {
                    shareId = changeSecurityGroupRequest.shareId;
                    body = changeSecurityGroupRequest.body
                } else {
                    shareId = changeSecurityGroupRequest['share_id'];
                    body = changeSecurityGroupRequest['body'];
                }
            }

        
            if (shareId === null || shareId === undefined) {
            throw new RequiredError('shareId','Required parameter shareId was null or undefined when calling changeSecurityGroup.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'share_id': shareId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 修改文件系统名称
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        changeShareName(changeShareNameRequest?: ChangeShareNameRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/sfs-turbo/shares/{share_id}/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let shareId;

            if (changeShareNameRequest !== null && changeShareNameRequest !== undefined) {
                if (changeShareNameRequest instanceof ChangeShareNameRequest) {
                    shareId = changeShareNameRequest.shareId;
                    body = changeShareNameRequest.body
                } else {
                    shareId = changeShareNameRequest['share_id'];
                    body = changeShareNameRequest['body'];
                }
            }

        
            if (shareId === null || shareId === undefined) {
            throw new RequiredError('shareId','Required parameter shareId was null or undefined when calling changeShareName.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'share_id': shareId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建目录 (目前已上线的局点：上海一、上海二、北京二、北京四、乌兰察布一、广州、贵阳一、中国-香港、亚太-新加坡、亚太-曼谷)
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createFsDir(createFsDirRequest?: CreateFsDirRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/sfs-turbo/shares/{share_id}/fs/dir",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let shareId;

            if (createFsDirRequest !== null && createFsDirRequest !== undefined) {
                if (createFsDirRequest instanceof CreateFsDirRequest) {
                    shareId = createFsDirRequest.shareId;
                    body = createFsDirRequest.body
                } else {
                    shareId = createFsDirRequest['share_id'];
                    body = createFsDirRequest['body'];
                }
            }

        
            if (shareId === null || shareId === undefined) {
            throw new RequiredError('shareId','Required parameter shareId was null or undefined when calling createFsDir.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'share_id': shareId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建目标文件夹quota。只支持对空目录设置目录quota (目前已上线的局点：上海一、上海二、北京二、北京四、乌兰察布一、广州、贵阳一、中国-香港、亚太-新加坡、亚太-曼谷)
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createFsDirQuota(createFsDirQuotaRequest?: CreateFsDirQuotaRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/sfs-turbo/shares/{share_id}/fs/dir-quota",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let shareId;

            if (createFsDirQuotaRequest !== null && createFsDirQuotaRequest !== undefined) {
                if (createFsDirQuotaRequest instanceof CreateFsDirQuotaRequest) {
                    shareId = createFsDirQuotaRequest.shareId;
                    body = createFsDirQuotaRequest.body
                } else {
                    shareId = createFsDirQuotaRequest['share_id'];
                    body = createFsDirQuotaRequest['body'];
                }
            }

        
            if (shareId === null || shareId === undefined) {
            throw new RequiredError('shareId','Required parameter shareId was null or undefined when calling createFsDirQuota.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'share_id': shareId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建文件系统。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createShare(createShareRequest?: CreateShareRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/sfs-turbo/shares",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createShareRequest !== null && createShareRequest !== undefined) {
                if (createShareRequest instanceof CreateShareRequest) {
                    body = createShareRequest.body
                } else {
                    body = createShareRequest['body'];
                }
            }

        
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 指定共享添加一个标签。
         * 一个共享上最多有10个标签。
         * 一个共享上的多个标签的key不允许重复。
         * 此接口为幂等接口：如果要添加的key在共享上已存在，则覆盖更新标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createSharedTag(createSharedTagRequest?: CreateSharedTagRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/sfs-turbo/{share_id}/tags",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let shareId;

            if (createSharedTagRequest !== null && createSharedTagRequest !== undefined) {
                if (createSharedTagRequest instanceof CreateSharedTagRequest) {
                    shareId = createSharedTagRequest.shareId;
                    body = createSharedTagRequest.body
                } else {
                    shareId = createSharedTagRequest['share_id'];
                    body = createSharedTagRequest['body'];
                }
            }

        
            if (shareId === null || shareId === undefined) {
            throw new RequiredError('shareId','Required parameter shareId was null or undefined when calling createSharedTag.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'share_id': shareId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除文件系统目录 (目前已上线的局点：上海一、上海二、北京二、北京四、乌兰察布一、广州、贵阳一、中国-香港、亚太-新加坡、亚太-曼谷)
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteFsDir(deleteFsDirRequest?: DeleteFsDirRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/sfs-turbo/shares/{share_id}/fs/dir",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let shareId;

            if (deleteFsDirRequest !== null && deleteFsDirRequest !== undefined) {
                if (deleteFsDirRequest instanceof DeleteFsDirRequest) {
                    shareId = deleteFsDirRequest.shareId;
                    body = deleteFsDirRequest.body
                } else {
                    shareId = deleteFsDirRequest['share_id'];
                    body = deleteFsDirRequest['body'];
                }
            }

        
            if (shareId === null || shareId === undefined) {
            throw new RequiredError('shareId','Required parameter shareId was null or undefined when calling deleteFsDir.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'share_id': shareId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除目标文件夹quota。只支持对空目录进行删除quota (目前已上线的局点：上海一、上海二、北京二、北京四、乌兰察布一、广州、贵阳一、中国-香港、亚太-新加坡、亚太-曼谷)
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteFsDirQuota(deleteFsDirQuotaRequest?: DeleteFsDirQuotaRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/sfs-turbo/shares/{share_id}/fs/dir-quota",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let shareId;

            if (deleteFsDirQuotaRequest !== null && deleteFsDirQuotaRequest !== undefined) {
                if (deleteFsDirQuotaRequest instanceof DeleteFsDirQuotaRequest) {
                    shareId = deleteFsDirQuotaRequest.shareId;
                    body = deleteFsDirQuotaRequest.body
                } else {
                    shareId = deleteFsDirQuotaRequest['share_id'];
                    body = deleteFsDirQuotaRequest['body'];
                }
            }

        
            if (shareId === null || shareId === undefined) {
            throw new RequiredError('shareId','Required parameter shareId was null or undefined when calling deleteFsDirQuota.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'share_id': shareId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除文件系统。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteShare(deleteShareRequest?: DeleteShareRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/sfs-turbo/shares/{share_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let shareId;

            if (deleteShareRequest !== null && deleteShareRequest !== undefined) {
                if (deleteShareRequest instanceof DeleteShareRequest) {
                    shareId = deleteShareRequest.shareId;
                } else {
                    shareId = deleteShareRequest['share_id'];
                }
            }

        
            if (shareId === null || shareId === undefined) {
            throw new RequiredError('shareId','Required parameter shareId was null or undefined when calling deleteShare.');
            }

            options.pathParams = { 'share_id': shareId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 指定共享删除一个标签。当共享中不存在指定要删除的key时，接口调用将会返回404错误。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteSharedTag(deleteSharedTagRequest?: DeleteSharedTagRequest) {
            const options = {
                method: "DELETE",
                url: "/v1/{project_id}/sfs-turbo/{share_id}/tags/{key}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let shareId;
            
            let key;

            if (deleteSharedTagRequest !== null && deleteSharedTagRequest !== undefined) {
                if (deleteSharedTagRequest instanceof DeleteSharedTagRequest) {
                    shareId = deleteSharedTagRequest.shareId;
                    key = deleteSharedTagRequest.key;
                } else {
                    shareId = deleteSharedTagRequest['share_id'];
                    key = deleteSharedTagRequest['key'];
                }
            }

        
            if (shareId === null || shareId === undefined) {
            throw new RequiredError('shareId','Required parameter shareId was null or undefined when calling deleteSharedTag.');
            }
            if (key === null || key === undefined) {
            throw new RequiredError('key','Required parameter key was null or undefined when calling deleteSharedTag.');
            }

            options.pathParams = { 'share_id': shareId,'key': key, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 扩容文件系统。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        expandShare(expandShareRequest?: ExpandShareRequest) {
            const options = {
                method: "POST",
                url: "/v1/{project_id}/sfs-turbo/shares/{share_id}/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let shareId;

            if (expandShareRequest !== null && expandShareRequest !== undefined) {
                if (expandShareRequest instanceof ExpandShareRequest) {
                    shareId = expandShareRequest.shareId;
                    body = expandShareRequest.body
                } else {
                    shareId = expandShareRequest['share_id'];
                    body = expandShareRequest['body'];
                }
            }

        
            if (shareId === null || shareId === undefined) {
            throw new RequiredError('shareId','Required parameter shareId was null or undefined when calling expandShare.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'share_id': shareId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询租户所有共享的标签集合。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSharedTags() {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/sfs-turbo/tags",
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
         * 获取文件系统列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listShares(listSharesRequest?: ListSharesRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/sfs-turbo/shares/detail",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let offset;

            if (listSharesRequest !== null && listSharesRequest !== undefined) {
                if (listSharesRequest instanceof ListSharesRequest) {
                    limit = listSharesRequest.limit;
                    offset = listSharesRequest.offset;
                } else {
                    limit = listSharesRequest['limit'];
                    offset = listSharesRequest['offset'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (offset !== null && offset !== undefined) {
                localVarQueryParameter['offset'] = offset;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询目录是否存在 (目前已上线的局点：上海一、上海二、北京二、北京四、乌兰察布一、广州、贵阳一、中国-香港、亚太-新加坡、亚太-曼谷)
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showFsDir(showFsDirRequest?: ShowFsDirRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/sfs-turbo/shares/{share_id}/fs/dir",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let shareId;
            
            let path;

            if (showFsDirRequest !== null && showFsDirRequest !== undefined) {
                if (showFsDirRequest instanceof ShowFsDirRequest) {
                    shareId = showFsDirRequest.shareId;
                    path = showFsDirRequest.path;
                } else {
                    shareId = showFsDirRequest['share_id'];
                    path = showFsDirRequest['path'];
                }
            }

        
            if (shareId === null || shareId === undefined) {
            throw new RequiredError('shareId','Required parameter shareId was null or undefined when calling showFsDir.');
            }
            if (path === null || path === undefined) {
                throw new RequiredError('path','Required parameter path was null or undefined when calling showFsDir.');
            }
            if (path !== null && path !== undefined) {
                localVarQueryParameter['path'] = path;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'share_id': shareId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询目标文件夹quota (目前已上线的局点：上海一、上海二、北京二、北京四、乌兰察布一、广州、贵阳一、中国-香港、亚太-新加坡、亚太-曼谷)
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showFsDirQuota(showFsDirQuotaRequest?: ShowFsDirQuotaRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/sfs-turbo/shares/{share_id}/fs/dir-quota",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let shareId;
            
            let path;

            if (showFsDirQuotaRequest !== null && showFsDirQuotaRequest !== undefined) {
                if (showFsDirQuotaRequest instanceof ShowFsDirQuotaRequest) {
                    shareId = showFsDirQuotaRequest.shareId;
                    path = showFsDirQuotaRequest.path;
                } else {
                    shareId = showFsDirQuotaRequest['share_id'];
                    path = showFsDirQuotaRequest['path'];
                }
            }

        
            if (shareId === null || shareId === undefined) {
            throw new RequiredError('shareId','Required parameter shareId was null or undefined when calling showFsDirQuota.');
            }
            if (path === null || path === undefined) {
                throw new RequiredError('path','Required parameter path was null or undefined when calling showFsDirQuota.');
            }
            if (path !== null && path !== undefined) {
                localVarQueryParameter['path'] = path;
            }

            options.queryParams = localVarQueryParameter;
            options.pathParams = { 'share_id': shareId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询SFS Turbo文件系统详细信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showShare(showShareRequest?: ShowShareRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/sfs-turbo/shares/{share_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let shareId;

            if (showShareRequest !== null && showShareRequest !== undefined) {
                if (showShareRequest instanceof ShowShareRequest) {
                    shareId = showShareRequest.shareId;
                } else {
                    shareId = showShareRequest['share_id'];
                }
            }

        
            if (shareId === null || shareId === undefined) {
            throw new RequiredError('shareId','Required parameter shareId was null or undefined when calling showShare.');
            }

            options.pathParams = { 'share_id': shareId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询指定共享的所有标签信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showSharedTags(showSharedTagsRequest?: ShowSharedTagsRequest) {
            const options = {
                method: "GET",
                url: "/v1/{project_id}/sfs-turbo/{share_id}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let shareId;

            if (showSharedTagsRequest !== null && showSharedTagsRequest !== undefined) {
                if (showSharedTagsRequest instanceof ShowSharedTagsRequest) {
                    shareId = showSharedTagsRequest.shareId;
                } else {
                    shareId = showSharedTagsRequest['share_id'];
                }
            }

        
            if (shareId === null || shareId === undefined) {
            throw new RequiredError('shareId','Required parameter shareId was null or undefined when calling showSharedTags.');
            }

            options.pathParams = { 'share_id': shareId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 更新目标文件夹quota (目前已上线的局点：上海一、上海二、北京二、北京四、乌兰察布一、广州、贵阳一、中国-香港、亚太-新加坡、亚太-曼谷)
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateFsDirQuota(updateFsDirQuotaRequest?: UpdateFsDirQuotaRequest) {
            const options = {
                method: "PUT",
                url: "/v1/{project_id}/sfs-turbo/shares/{share_id}/fs/dir-quota",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let shareId;

            if (updateFsDirQuotaRequest !== null && updateFsDirQuotaRequest !== undefined) {
                if (updateFsDirQuotaRequest instanceof UpdateFsDirQuotaRequest) {
                    shareId = updateFsDirQuotaRequest.shareId;
                    body = updateFsDirQuotaRequest.body
                } else {
                    shareId = updateFsDirQuotaRequest['share_id'];
                    body = updateFsDirQuotaRequest['body'];
                }
            }

        
            if (shareId === null || shareId === undefined) {
            throw new RequiredError('shareId','Required parameter shareId was null or undefined when calling updateFsDirQuota.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'share_id': shareId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): SFSTurboClient {
    return new SFSTurboClient(client);
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