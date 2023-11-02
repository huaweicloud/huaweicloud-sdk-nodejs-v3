import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { AssociateKeypairRequest } from './model/AssociateKeypairRequest';
import { AssociateKeypairRequestBody } from './model/AssociateKeypairRequestBody';
import { AssociateKeypairResponse } from './model/AssociateKeypairResponse';
import { Auth } from './model/Auth';
import { BatchAssociateKeypairRequest } from './model/BatchAssociateKeypairRequest';
import { BatchAssociateKeypairRequestBody } from './model/BatchAssociateKeypairRequestBody';
import { BatchAssociateKeypairResponse } from './model/BatchAssociateKeypairResponse';
import { ClearPrivateKeyRequest } from './model/ClearPrivateKeyRequest';
import { ClearPrivateKeyResponse } from './model/ClearPrivateKeyResponse';
import { CreateKeypairAction } from './model/CreateKeypairAction';
import { CreateKeypairRequest } from './model/CreateKeypairRequest';
import { CreateKeypairRequestBody } from './model/CreateKeypairRequestBody';
import { CreateKeypairResp } from './model/CreateKeypairResp';
import { CreateKeypairResponse } from './model/CreateKeypairResponse';
import { DeleteAllFailedTaskRequest } from './model/DeleteAllFailedTaskRequest';
import { DeleteAllFailedTaskResponse } from './model/DeleteAllFailedTaskResponse';
import { DeleteFailedTaskRequest } from './model/DeleteFailedTaskRequest';
import { DeleteFailedTaskResponse } from './model/DeleteFailedTaskResponse';
import { DeleteKeypairRequest } from './model/DeleteKeypairRequest';
import { DeleteKeypairResponse } from './model/DeleteKeypairResponse';
import { DisassociateEcsServerInfo } from './model/DisassociateEcsServerInfo';
import { DisassociateKeypairRequest } from './model/DisassociateKeypairRequest';
import { DisassociateKeypairRequestBody } from './model/DisassociateKeypairRequestBody';
import { DisassociateKeypairResponse } from './model/DisassociateKeypairResponse';
import { EcsServerInfo } from './model/EcsServerInfo';
import { Encryption } from './model/Encryption';
import { ExportPrivateKeyKeypairBean } from './model/ExportPrivateKeyKeypairBean';
import { ExportPrivateKeyRequest } from './model/ExportPrivateKeyRequest';
import { ExportPrivateKeyRequestBody } from './model/ExportPrivateKeyRequestBody';
import { ExportPrivateKeyResponse } from './model/ExportPrivateKeyResponse';
import { FailedTasks } from './model/FailedTasks';
import { ImportPrivateKeyAction } from './model/ImportPrivateKeyAction';
import { ImportPrivateKeyKeypairBean } from './model/ImportPrivateKeyKeypairBean';
import { ImportPrivateKeyProtection } from './model/ImportPrivateKeyProtection';
import { ImportPrivateKeyRequest } from './model/ImportPrivateKeyRequest';
import { ImportPrivateKeyRequestBody } from './model/ImportPrivateKeyRequestBody';
import { ImportPrivateKeyResponse } from './model/ImportPrivateKeyResponse';
import { KeyProtection } from './model/KeyProtection';
import { Keypair } from './model/Keypair';
import { KeypairBean } from './model/KeypairBean';
import { KeypairDetail } from './model/KeypairDetail';
import { Keypairs } from './model/Keypairs';
import { ListFailedTaskRequest } from './model/ListFailedTaskRequest';
import { ListFailedTaskResponse } from './model/ListFailedTaskResponse';
import { ListKeypairDetailRequest } from './model/ListKeypairDetailRequest';
import { ListKeypairDetailResponse } from './model/ListKeypairDetailResponse';
import { ListKeypairTaskRequest } from './model/ListKeypairTaskRequest';
import { ListKeypairTaskResponse } from './model/ListKeypairTaskResponse';
import { ListKeypairsRequest } from './model/ListKeypairsRequest';
import { ListKeypairsResponse } from './model/ListKeypairsResponse';
import { ListRunningTaskRequest } from './model/ListRunningTaskRequest';
import { ListRunningTaskResponse } from './model/ListRunningTaskResponse';
import { PageInfo } from './model/PageInfo';
import { RunningTasks } from './model/RunningTasks';
import { TaskResponseBody } from './model/TaskResponseBody';
import { UpdateKeypairDescriptionReq } from './model/UpdateKeypairDescriptionReq';
import { UpdateKeypairDescriptionRequest } from './model/UpdateKeypairDescriptionRequest';
import { UpdateKeypairDescriptionRequestBody } from './model/UpdateKeypairDescriptionRequestBody';
import { UpdateKeypairDescriptionResponse } from './model/UpdateKeypairDescriptionResponse';

export class KpsClient {
    public static newBuilder(): ClientBuilder<KpsClient> {
            return new ClientBuilder<KpsClient>(newClient);
    }

    private hcClient: HcClient;
    public constructor(client: HcClient) {
        this.hcClient = client;
    }

    public getPath() {
        return __dirname;
    }


    /**
     * 给指定的虚拟机绑定（替换或重置，替换需提供虚拟机已配置的SSH密钥对私钥；重置不需要提供虚拟机的SSH密钥对私钥）新的SSH密钥对。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 绑定SSH密钥对
     * @param {AssociateKeypairRequestBody} associateKeypairRequestBody 绑定密钥对消息体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public associateKeypair(associateKeypairRequest?: AssociateKeypairRequest): Promise<AssociateKeypairResponse> {
        const options = ParamCreater().associateKeypair(associateKeypairRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 给指定的虚拟机批量绑定新的SSH密钥对。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量绑定SSH密钥对
     * @param {BatchAssociateKeypairRequestBody} batchAssociateKeypairRequestBody 批量绑定密钥对消息体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchAssociateKeypair(batchAssociateKeypairRequest?: BatchAssociateKeypairRequest): Promise<BatchAssociateKeypairResponse> {
        const options = ParamCreater().batchAssociateKeypair(batchAssociateKeypairRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 清除SSH密钥对私钥。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 清除私钥
     * @param {string} keypairName 密钥对名称。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public clearPrivateKey(clearPrivateKeyRequest?: ClearPrivateKeyRequest): Promise<ClearPrivateKeyResponse> {
        const options = ParamCreater().clearPrivateKey(clearPrivateKeyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建和导入SSH密钥对
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建和导入SSH密钥对
     * @param {CreateKeypairRequestBody} createKeypairRequestBody 创建密钥对消息体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createKeypair(createKeypairRequest?: CreateKeypairRequest): Promise<CreateKeypairResponse> {
        const options = ParamCreater().createKeypair(createKeypairRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除操作失败的任务信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除所有失败的任务
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteAllFailedTask(deleteAllFailedTaskRequest?: DeleteAllFailedTaskRequest): Promise<DeleteAllFailedTaskResponse> {
        const options = ParamCreater().deleteAllFailedTask();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除失败的任务。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除失败的任务
     * @param {string} taskId 任务ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteFailedTask(deleteFailedTaskRequest?: DeleteFailedTaskRequest): Promise<DeleteFailedTaskResponse> {
        const options = ParamCreater().deleteFailedTask(deleteFailedTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除SSH密钥对。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除SSH密钥对
     * @param {string} keypairName 密钥对名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteKeypair(deleteKeypairRequest?: DeleteKeypairRequest): Promise<DeleteKeypairResponse> {
        const options = ParamCreater().deleteKeypair(deleteKeypairRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 给指定的虚拟机解除绑定SSH密钥对并恢复SSH密码登录。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 解绑SSH密钥对
     * @param {DisassociateKeypairRequestBody} disassociateKeypairRequestBody 解绑密钥对消息体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public disassociateKeypair(disassociateKeypairRequest?: DisassociateKeypairRequest): Promise<DisassociateKeypairResponse> {
        const options = ParamCreater().disassociateKeypair(disassociateKeypairRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 导出指定密钥对的私钥。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 导出私钥
     * @param {ExportPrivateKeyRequestBody} exportPrivateKeyRequestBody 导出私钥消息体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public exportPrivateKey(exportPrivateKeyRequest?: ExportPrivateKeyRequest): Promise<ExportPrivateKeyResponse> {
        const options = ParamCreater().exportPrivateKey(exportPrivateKeyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 导入私钥到指定密钥对。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 导入私钥
     * @param {ImportPrivateKeyRequestBody} importPrivateKeyRequestBody 导入私钥消息体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public importPrivateKey(importPrivateKeyRequest?: ImportPrivateKeyRequest): Promise<ImportPrivateKeyResponse> {
        const options = ParamCreater().importPrivateKey(importPrivateKeyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询绑定、解绑等操作失败的任务信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询失败的任务信息
     * @param {number} [limit] 每页显示的条目数量。默认值1000。
     * @param {number} [offset] 失败的任务信息列表的偏移量
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listFailedTask(listFailedTaskRequest?: ListFailedTaskRequest): Promise<ListFailedTaskResponse> {
        const options = ParamCreater().listFailedTask(listFailedTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询SSH密钥对详细信息
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询SSH密钥对详细信息
     * @param {string} keypairName 密钥对名称
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listKeypairDetail(listKeypairDetailRequest?: ListKeypairDetailRequest): Promise<ListKeypairDetailResponse> {
        const options = ParamCreater().listKeypairDetail(listKeypairDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 根据SSH密钥对接口返回的task_id，查询SSH密钥对当前任务的执行状态。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询任务信息
     * @param {string} taskId 任务ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listKeypairTask(listKeypairTaskRequest?: ListKeypairTaskRequest): Promise<ListKeypairTaskResponse> {
        const options = ParamCreater().listKeypairTask(listKeypairTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询SSH密钥对列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询SSH密钥对列表
     * @param {string} [limit] 每页返回的个数。 默认值：50。 
     * @param {string} [marker] 分页查询起始的资源id，为空时为查询第一页 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listKeypairs(listKeypairsRequest?: ListKeypairsRequest): Promise<ListKeypairsResponse> {
        const options = ParamCreater().listKeypairs(listKeypairsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询正在处理的任务信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询正在处理的任务信息
     * @param {number} [limit] 每页显示的条目数量。默认值1000。
     * @param {number} [offset] 首个展示的正在处理任务信息的偏移量
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRunningTask(listRunningTaskRequest?: ListRunningTaskRequest): Promise<ListRunningTaskResponse> {
        const options = ParamCreater().listRunningTask(listRunningTaskRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 更新SSH密钥对描述。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 更新SSH密钥对描述
     * @param {string} keypairName 密钥对名称
     * @param {UpdateKeypairDescriptionRequestBody} updateKeypairDescriptionRequestBody 更新密钥对描述消息体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateKeypairDescription(updateKeypairDescriptionRequest?: UpdateKeypairDescriptionRequest): Promise<UpdateKeypairDescriptionResponse> {
        const options = ParamCreater().updateKeypairDescription(updateKeypairDescriptionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 给指定的虚拟机绑定（替换或重置，替换需提供虚拟机已配置的SSH密钥对私钥；重置不需要提供虚拟机的SSH密钥对私钥）新的SSH密钥对。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        associateKeypair(associateKeypairRequest?: AssociateKeypairRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/keypairs/associate",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (associateKeypairRequest !== null && associateKeypairRequest !== undefined) {
                if (associateKeypairRequest instanceof AssociateKeypairRequest) {
                    body = associateKeypairRequest.body
                } else {
                    body = associateKeypairRequest['body'];
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
         * 给指定的虚拟机批量绑定新的SSH密钥对。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchAssociateKeypair(batchAssociateKeypairRequest?: BatchAssociateKeypairRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/keypairs/batch-associate",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (batchAssociateKeypairRequest !== null && batchAssociateKeypairRequest !== undefined) {
                if (batchAssociateKeypairRequest instanceof BatchAssociateKeypairRequest) {
                    body = batchAssociateKeypairRequest.body
                } else {
                    body = batchAssociateKeypairRequest['body'];
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
         * 清除SSH密钥对私钥。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        clearPrivateKey(clearPrivateKeyRequest?: ClearPrivateKeyRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/keypairs/{keypair_name}/private-key",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let keypairName;

            if (clearPrivateKeyRequest !== null && clearPrivateKeyRequest !== undefined) {
                if (clearPrivateKeyRequest instanceof ClearPrivateKeyRequest) {
                    keypairName = clearPrivateKeyRequest.keypairName;
                } else {
                    keypairName = clearPrivateKeyRequest['keypair_name'];
                }
            }

        
            if (keypairName === null || keypairName === undefined) {
            throw new RequiredError('keypairName','Required parameter keypairName was null or undefined when calling clearPrivateKey.');
            }

            options.pathParams = { 'keypair_name': keypairName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 创建和导入SSH密钥对
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createKeypair(createKeypairRequest?: CreateKeypairRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/keypairs",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createKeypairRequest !== null && createKeypairRequest !== undefined) {
                if (createKeypairRequest instanceof CreateKeypairRequest) {
                    body = createKeypairRequest.body
                } else {
                    body = createKeypairRequest['body'];
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
         * 删除操作失败的任务信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteAllFailedTask() {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/failed-tasks",
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
         * 删除失败的任务。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteFailedTask(deleteFailedTaskRequest?: DeleteFailedTaskRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/failed-tasks/{task_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let taskId;

            if (deleteFailedTaskRequest !== null && deleteFailedTaskRequest !== undefined) {
                if (deleteFailedTaskRequest instanceof DeleteFailedTaskRequest) {
                    taskId = deleteFailedTaskRequest.taskId;
                } else {
                    taskId = deleteFailedTaskRequest['task_id'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling deleteFailedTask.');
            }

            options.pathParams = { 'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 删除SSH密钥对。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteKeypair(deleteKeypairRequest?: DeleteKeypairRequest) {
            const options = {
                method: "DELETE",
                url: "/v3/{project_id}/keypairs/{keypair_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let keypairName;

            if (deleteKeypairRequest !== null && deleteKeypairRequest !== undefined) {
                if (deleteKeypairRequest instanceof DeleteKeypairRequest) {
                    keypairName = deleteKeypairRequest.keypairName;
                } else {
                    keypairName = deleteKeypairRequest['keypair_name'];
                }
            }

        
            if (keypairName === null || keypairName === undefined) {
            throw new RequiredError('keypairName','Required parameter keypairName was null or undefined when calling deleteKeypair.');
            }

            options.pathParams = { 'keypair_name': keypairName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 给指定的虚拟机解除绑定SSH密钥对并恢复SSH密码登录。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        disassociateKeypair(disassociateKeypairRequest?: DisassociateKeypairRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/keypairs/disassociate",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (disassociateKeypairRequest !== null && disassociateKeypairRequest !== undefined) {
                if (disassociateKeypairRequest instanceof DisassociateKeypairRequest) {
                    body = disassociateKeypairRequest.body
                } else {
                    body = disassociateKeypairRequest['body'];
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
         * 导出指定密钥对的私钥。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        exportPrivateKey(exportPrivateKeyRequest?: ExportPrivateKeyRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/keypairs/private-key/export",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (exportPrivateKeyRequest !== null && exportPrivateKeyRequest !== undefined) {
                if (exportPrivateKeyRequest instanceof ExportPrivateKeyRequest) {
                    body = exportPrivateKeyRequest.body
                } else {
                    body = exportPrivateKeyRequest['body'];
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
         * 导入私钥到指定密钥对。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        importPrivateKey(importPrivateKeyRequest?: ImportPrivateKeyRequest) {
            const options = {
                method: "POST",
                url: "/v3/{project_id}/keypairs/private-key/import",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (importPrivateKeyRequest !== null && importPrivateKeyRequest !== undefined) {
                if (importPrivateKeyRequest instanceof ImportPrivateKeyRequest) {
                    body = importPrivateKeyRequest.body
                } else {
                    body = importPrivateKeyRequest['body'];
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
         * 查询绑定、解绑等操作失败的任务信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listFailedTask(listFailedTaskRequest?: ListFailedTaskRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/failed-tasks",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let offset;

            if (listFailedTaskRequest !== null && listFailedTaskRequest !== undefined) {
                if (listFailedTaskRequest instanceof ListFailedTaskRequest) {
                    limit = listFailedTaskRequest.limit;
                    offset = listFailedTaskRequest.offset;
                } else {
                    limit = listFailedTaskRequest['limit'];
                    offset = listFailedTaskRequest['offset'];
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
         * 查询SSH密钥对详细信息
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listKeypairDetail(listKeypairDetailRequest?: ListKeypairDetailRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/keypairs/{keypair_name}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let keypairName;

            if (listKeypairDetailRequest !== null && listKeypairDetailRequest !== undefined) {
                if (listKeypairDetailRequest instanceof ListKeypairDetailRequest) {
                    keypairName = listKeypairDetailRequest.keypairName;
                } else {
                    keypairName = listKeypairDetailRequest['keypair_name'];
                }
            }

        
            if (keypairName === null || keypairName === undefined) {
            throw new RequiredError('keypairName','Required parameter keypairName was null or undefined when calling listKeypairDetail.');
            }

            options.pathParams = { 'keypair_name': keypairName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 根据SSH密钥对接口返回的task_id，查询SSH密钥对当前任务的执行状态。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listKeypairTask(listKeypairTaskRequest?: ListKeypairTaskRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/tasks/{task_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let taskId;

            if (listKeypairTaskRequest !== null && listKeypairTaskRequest !== undefined) {
                if (listKeypairTaskRequest instanceof ListKeypairTaskRequest) {
                    taskId = listKeypairTaskRequest.taskId;
                } else {
                    taskId = listKeypairTaskRequest['task_id'];
                }
            }

        
            if (taskId === null || taskId === undefined) {
            throw new RequiredError('taskId','Required parameter taskId was null or undefined when calling listKeypairTask.');
            }

            options.pathParams = { 'task_id': taskId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询SSH密钥对列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listKeypairs(listKeypairsRequest?: ListKeypairsRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/keypairs",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let marker;

            if (listKeypairsRequest !== null && listKeypairsRequest !== undefined) {
                if (listKeypairsRequest instanceof ListKeypairsRequest) {
                    limit = listKeypairsRequest.limit;
                    marker = listKeypairsRequest.marker;
                } else {
                    limit = listKeypairsRequest['limit'];
                    marker = listKeypairsRequest['marker'];
                }
            }

        
            if (limit !== null && limit !== undefined) {
                localVarQueryParameter['limit'] = limit;
            }
            if (marker !== null && marker !== undefined) {
                localVarQueryParameter['marker'] = marker;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 查询正在处理的任务信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRunningTask(listRunningTaskRequest?: ListRunningTaskRequest) {
            const options = {
                method: "GET",
                url: "/v3/{project_id}/running-tasks",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let offset;

            if (listRunningTaskRequest !== null && listRunningTaskRequest !== undefined) {
                if (listRunningTaskRequest instanceof ListRunningTaskRequest) {
                    limit = listRunningTaskRequest.limit;
                    offset = listRunningTaskRequest.offset;
                } else {
                    limit = listRunningTaskRequest['limit'];
                    offset = listRunningTaskRequest['offset'];
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
         * 更新SSH密钥对描述。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateKeypairDescription(updateKeypairDescriptionRequest?: UpdateKeypairDescriptionRequest) {
            const options = {
                method: "PUT",
                url: "/v3/{project_id}/keypairs/{keypair_name}",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let keypairName;

            if (updateKeypairDescriptionRequest !== null && updateKeypairDescriptionRequest !== undefined) {
                if (updateKeypairDescriptionRequest instanceof UpdateKeypairDescriptionRequest) {
                    keypairName = updateKeypairDescriptionRequest.keypairName;
                    body = updateKeypairDescriptionRequest.body
                } else {
                    keypairName = updateKeypairDescriptionRequest['keypair_name'];
                    body = updateKeypairDescriptionRequest['body'];
                }
            }

        
            if (keypairName === null || keypairName === undefined) {
            throw new RequiredError('keypairName','Required parameter keypairName was null or undefined when calling updateKeypairDescription.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'keypair_name': keypairName, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): KpsClient {
    return new KpsClient(client);
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