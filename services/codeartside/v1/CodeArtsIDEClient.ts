import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { ShowLatestUpgradableReleaseRequest } from './model/ShowLatestUpgradableReleaseRequest';
import { ShowLatestUpgradableReleaseResponse } from './model/ShowLatestUpgradableReleaseResponse';
import { ShowLatestUpgradableReleaseResponseBodyResult } from './model/ShowLatestUpgradableReleaseResponseBodyResult';
import { ValidateWhitelistUserRequest } from './model/ValidateWhitelistUserRequest';
import { ValidateWhitelistUserRequestBody } from './model/ValidateWhitelistUserRequestBody';
import { ValidateWhitelistUserResponse } from './model/ValidateWhitelistUserResponse';

export class CodeArtsIDEClient {
    public static newBuilder(): ClientBuilder<CodeArtsIDEClient> {
            let client = new ClientBuilder<CodeArtsIDEClient>(newClient);
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
     * 查询升级版本
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询升级版本
     * @param {string} subProductName 子产品名称
     * @param {'windows' | 'debian' | 'darwin'} osType 系统类型
     * @param {'X86-64' | 'Arm64' | 'Universal'} [arch] CPU架构
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showLatestUpgradableRelease(showLatestUpgradableReleaseRequest?: ShowLatestUpgradableReleaseRequest): Promise<ShowLatestUpgradableReleaseResponse> {
        const options = ParamCreater().showLatestUpgradableRelease(showLatestUpgradableReleaseRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 是否白名单用户
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 是否白名单用户
     * @param {ValidateWhitelistUserRequestBody} validateWhitelistUserRequestBody ValidateWhitelistUserRequestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public validateWhitelistUser(validateWhitelistUserRequest?: ValidateWhitelistUserRequest): Promise<ValidateWhitelistUserResponse> {
        const options = ParamCreater().validateWhitelistUser(validateWhitelistUserRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * 查询升级版本
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showLatestUpgradableRelease(showLatestUpgradableReleaseRequest?: ShowLatestUpgradableReleaseRequest) {
            const options = {
                method: "GET",
                url: "/v1/release-info/latest",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let subProductName;
            
            let osType;
            
            let arch;

            if (showLatestUpgradableReleaseRequest !== null && showLatestUpgradableReleaseRequest !== undefined) {
                if (showLatestUpgradableReleaseRequest instanceof ShowLatestUpgradableReleaseRequest) {
                    subProductName = showLatestUpgradableReleaseRequest.subProductName;
                    osType = showLatestUpgradableReleaseRequest.osType;
                    arch = showLatestUpgradableReleaseRequest.arch;
                } else {
                    subProductName = showLatestUpgradableReleaseRequest['sub_product_name'];
                    osType = showLatestUpgradableReleaseRequest['os_type'];
                    arch = showLatestUpgradableReleaseRequest['arch'];
                }
            }

        
            if (subProductName === null || subProductName === undefined) {
                throw new RequiredError('subProductName','Required parameter subProductName was null or undefined when calling showLatestUpgradableRelease.');
            }
            if (subProductName !== null && subProductName !== undefined) {
                localVarQueryParameter['sub_product_name'] = subProductName;
            }
            if (osType === null || osType === undefined) {
                throw new RequiredError('osType','Required parameter osType was null or undefined when calling showLatestUpgradableRelease.');
            }
            if (osType !== null && osType !== undefined) {
                localVarQueryParameter['os_type'] = osType;
            }
            if (arch !== null && arch !== undefined) {
                localVarQueryParameter['arch'] = arch;
            }

            options.queryParams = localVarQueryParameter;
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * 是否白名单用户
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        validateWhitelistUser(validateWhitelistUserRequest?: ValidateWhitelistUserRequest) {
            const options = {
                method: "POST",
                url: "/v1/config/users/check",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (validateWhitelistUserRequest !== null && validateWhitelistUserRequest !== undefined) {
                if (validateWhitelistUserRequest instanceof ValidateWhitelistUserRequest) {
                    body = validateWhitelistUserRequest.body
                } else {
                    body = validateWhitelistUserRequest['body'];
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
    
    }
};

function newClient(client: HcClient): CodeArtsIDEClient {
    return new CodeArtsIDEClient(client);
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