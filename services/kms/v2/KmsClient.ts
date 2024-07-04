import { HcClient } from "@huaweicloud/huaweicloud-sdk-core/HcClient";
import { ClientBuilder } from "@huaweicloud/huaweicloud-sdk-core/ClientBuilder";
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

import { ActionResources } from './model/ActionResources';
import { ApiLink } from './model/ApiLink';
import { ApiVersionDetail } from './model/ApiVersionDetail';
import { BatchCreateKmsTagsRequest } from './model/BatchCreateKmsTagsRequest';
import { BatchCreateKmsTagsRequestBody } from './model/BatchCreateKmsTagsRequestBody';
import { BatchCreateKmsTagsResponse } from './model/BatchCreateKmsTagsResponse';
import { CancelGrantRequest } from './model/CancelGrantRequest';
import { CancelGrantResponse } from './model/CancelGrantResponse';
import { CancelKeyDeletionRequest } from './model/CancelKeyDeletionRequest';
import { CancelKeyDeletionResponse } from './model/CancelKeyDeletionResponse';
import { CancelSelfGrantRequest } from './model/CancelSelfGrantRequest';
import { CancelSelfGrantResponse } from './model/CancelSelfGrantResponse';
import { CreateDatakeyRequest } from './model/CreateDatakeyRequest';
import { CreateDatakeyRequestBody } from './model/CreateDatakeyRequestBody';
import { CreateDatakeyResponse } from './model/CreateDatakeyResponse';
import { CreateDatakeyWithoutPlaintextRequest } from './model/CreateDatakeyWithoutPlaintextRequest';
import { CreateDatakeyWithoutPlaintextResponse } from './model/CreateDatakeyWithoutPlaintextResponse';
import { CreateGrantRequest } from './model/CreateGrantRequest';
import { CreateGrantRequestBody } from './model/CreateGrantRequestBody';
import { CreateGrantResponse } from './model/CreateGrantResponse';
import { CreateKeyRequest } from './model/CreateKeyRequest';
import { CreateKeyRequestBody } from './model/CreateKeyRequestBody';
import { CreateKeyResponse } from './model/CreateKeyResponse';
import { CreateKeyStoreRequest } from './model/CreateKeyStoreRequest';
import { CreateKeyStoreRequestBody } from './model/CreateKeyStoreRequestBody';
import { CreateKeyStoreResponse } from './model/CreateKeyStoreResponse';
import { CreateKmsTagRequest } from './model/CreateKmsTagRequest';
import { CreateKmsTagRequestBody } from './model/CreateKmsTagRequestBody';
import { CreateKmsTagResponse } from './model/CreateKmsTagResponse';
import { CreateParametersForImportRequest } from './model/CreateParametersForImportRequest';
import { CreateParametersForImportResponse } from './model/CreateParametersForImportResponse';
import { CreateRandomRequest } from './model/CreateRandomRequest';
import { CreateRandomResponse } from './model/CreateRandomResponse';
import { DecryptDataRequest } from './model/DecryptDataRequest';
import { DecryptDataRequestBody } from './model/DecryptDataRequestBody';
import { DecryptDataResponse } from './model/DecryptDataResponse';
import { DecryptDatakeyRequest } from './model/DecryptDatakeyRequest';
import { DecryptDatakeyRequestBody } from './model/DecryptDatakeyRequestBody';
import { DecryptDatakeyResponse } from './model/DecryptDatakeyResponse';
import { DeleteImportedKeyMaterialRequest } from './model/DeleteImportedKeyMaterialRequest';
import { DeleteImportedKeyMaterialResponse } from './model/DeleteImportedKeyMaterialResponse';
import { DeleteKeyRequest } from './model/DeleteKeyRequest';
import { DeleteKeyResponse } from './model/DeleteKeyResponse';
import { DeleteKeyStoreRequest } from './model/DeleteKeyStoreRequest';
import { DeleteKeyStoreResponse } from './model/DeleteKeyStoreResponse';
import { DeleteTagRequest } from './model/DeleteTagRequest';
import { DeleteTagResponse } from './model/DeleteTagResponse';
import { DisableKeyRequest } from './model/DisableKeyRequest';
import { DisableKeyResponse } from './model/DisableKeyResponse';
import { DisableKeyRotationRequest } from './model/DisableKeyRotationRequest';
import { DisableKeyRotationResponse } from './model/DisableKeyRotationResponse';
import { DisableKeyStoreRequest } from './model/DisableKeyStoreRequest';
import { DisableKeyStoreResponse } from './model/DisableKeyStoreResponse';
import { EnableKeyRequest } from './model/EnableKeyRequest';
import { EnableKeyResponse } from './model/EnableKeyResponse';
import { EnableKeyRotationRequest } from './model/EnableKeyRotationRequest';
import { EnableKeyRotationResponse } from './model/EnableKeyRotationResponse';
import { EnableKeyStoreRequest } from './model/EnableKeyStoreRequest';
import { EnableKeyStoreResponse } from './model/EnableKeyStoreResponse';
import { EncryptDataRequest } from './model/EncryptDataRequest';
import { EncryptDataRequestBody } from './model/EncryptDataRequestBody';
import { EncryptDataResponse } from './model/EncryptDataResponse';
import { EncryptDatakeyRequest } from './model/EncryptDatakeyRequest';
import { EncryptDatakeyRequestBody } from './model/EncryptDatakeyRequestBody';
import { EncryptDatakeyResponse } from './model/EncryptDatakeyResponse';
import { GenRandomRequestBody } from './model/GenRandomRequestBody';
import { GenerateMacRequest } from './model/GenerateMacRequest';
import { GenerateMacRequestBody } from './model/GenerateMacRequestBody';
import { GenerateMacResponse } from './model/GenerateMacResponse';
import { GetParametersForImportRequestBody } from './model/GetParametersForImportRequestBody';
import { Grants } from './model/Grants';
import { ImportKeyMaterialRequest } from './model/ImportKeyMaterialRequest';
import { ImportKeyMaterialRequestBody } from './model/ImportKeyMaterialRequestBody';
import { ImportKeyMaterialResponse } from './model/ImportKeyMaterialResponse';
import { KeKInfo } from './model/KeKInfo';
import { KeyAliasInfo } from './model/KeyAliasInfo';
import { KeyDescriptionInfo } from './model/KeyDescriptionInfo';
import { KeyDetails } from './model/KeyDetails';
import { KeyStatusInfo } from './model/KeyStatusInfo';
import { KeyStoreStateInfo } from './model/KeyStoreStateInfo';
import { KeystoreDetails } from './model/KeystoreDetails';
import { KeystoreInfo } from './model/KeystoreInfo';
import { ListGrantsRequest } from './model/ListGrantsRequest';
import { ListGrantsRequestBody } from './model/ListGrantsRequestBody';
import { ListGrantsResponse } from './model/ListGrantsResponse';
import { ListKeyDetailRequest } from './model/ListKeyDetailRequest';
import { ListKeyDetailResponse } from './model/ListKeyDetailResponse';
import { ListKeyStoresRequest } from './model/ListKeyStoresRequest';
import { ListKeyStoresResponse } from './model/ListKeyStoresResponse';
import { ListKeysRequest } from './model/ListKeysRequest';
import { ListKeysRequestBody } from './model/ListKeysRequestBody';
import { ListKeysResponse } from './model/ListKeysResponse';
import { ListKmsByTagsRequest } from './model/ListKmsByTagsRequest';
import { ListKmsByTagsRequestBody } from './model/ListKmsByTagsRequestBody';
import { ListKmsByTagsResponse } from './model/ListKmsByTagsResponse';
import { ListKmsTagsRequest } from './model/ListKmsTagsRequest';
import { ListKmsTagsResponse } from './model/ListKmsTagsResponse';
import { ListRetirableGrantsRequest } from './model/ListRetirableGrantsRequest';
import { ListRetirableGrantsRequestBody } from './model/ListRetirableGrantsRequestBody';
import { ListRetirableGrantsResponse } from './model/ListRetirableGrantsResponse';
import { ListSupportRegionsRequest } from './model/ListSupportRegionsRequest';
import { ListSupportRegionsResponse } from './model/ListSupportRegionsResponse';
import { OperateKeyRequestBody } from './model/OperateKeyRequestBody';
import { Quotas } from './model/Quotas';
import { ReplicateKeyRequest } from './model/ReplicateKeyRequest';
import { ReplicateKeyRequestBody } from './model/ReplicateKeyRequestBody';
import { ReplicateKeyResponse } from './model/ReplicateKeyResponse';
import { Resources } from './model/Resources';
import { RevokeGrantRequestBody } from './model/RevokeGrantRequestBody';
import { ScheduleKeyDeletionRequestBody } from './model/ScheduleKeyDeletionRequestBody';
import { ShowKeyRotationStatusRequest } from './model/ShowKeyRotationStatusRequest';
import { ShowKeyRotationStatusResponse } from './model/ShowKeyRotationStatusResponse';
import { ShowKeyStoreRequest } from './model/ShowKeyStoreRequest';
import { ShowKeyStoreResponse } from './model/ShowKeyStoreResponse';
import { ShowKmsTagsRequest } from './model/ShowKmsTagsRequest';
import { ShowKmsTagsResponse } from './model/ShowKmsTagsResponse';
import { ShowPublicKeyRequest } from './model/ShowPublicKeyRequest';
import { ShowPublicKeyResponse } from './model/ShowPublicKeyResponse';
import { ShowUserInstancesRequest } from './model/ShowUserInstancesRequest';
import { ShowUserInstancesResponse } from './model/ShowUserInstancesResponse';
import { ShowUserQuotasRequest } from './model/ShowUserQuotasRequest';
import { ShowUserQuotasResponse } from './model/ShowUserQuotasResponse';
import { ShowVersionRequest } from './model/ShowVersionRequest';
import { ShowVersionResponse } from './model/ShowVersionResponse';
import { ShowVersionsRequest } from './model/ShowVersionsRequest';
import { ShowVersionsResponse } from './model/ShowVersionsResponse';
import { SignRequest } from './model/SignRequest';
import { SignRequestBody } from './model/SignRequestBody';
import { SignResponse } from './model/SignResponse';
import { Tag } from './model/Tag';
import { TagItem } from './model/TagItem';
import { UpdateKeyAliasRequest } from './model/UpdateKeyAliasRequest';
import { UpdateKeyAliasRequestBody } from './model/UpdateKeyAliasRequestBody';
import { UpdateKeyAliasResponse } from './model/UpdateKeyAliasResponse';
import { UpdateKeyDescriptionRequest } from './model/UpdateKeyDescriptionRequest';
import { UpdateKeyDescriptionRequestBody } from './model/UpdateKeyDescriptionRequestBody';
import { UpdateKeyDescriptionResponse } from './model/UpdateKeyDescriptionResponse';
import { UpdateKeyRotationIntervalRequest } from './model/UpdateKeyRotationIntervalRequest';
import { UpdateKeyRotationIntervalRequestBody } from './model/UpdateKeyRotationIntervalRequestBody';
import { UpdateKeyRotationIntervalResponse } from './model/UpdateKeyRotationIntervalResponse';
import { UpdatePrimaryRegionRequest } from './model/UpdatePrimaryRegionRequest';
import { UpdatePrimaryRegionRequestBody } from './model/UpdatePrimaryRegionRequestBody';
import { UpdatePrimaryRegionResponse } from './model/UpdatePrimaryRegionResponse';
import { ValidateSignatureRequest } from './model/ValidateSignatureRequest';
import { ValidateSignatureResponse } from './model/ValidateSignatureResponse';
import { VerifyMacRequest } from './model/VerifyMacRequest';
import { VerifyMacRequestBody } from './model/VerifyMacRequestBody';
import { VerifyMacResponse } from './model/VerifyMacResponse';
import { VerifyRequestBody } from './model/VerifyRequestBody';

export class KmsClient {
    public static newBuilder(): ClientBuilder<KmsClient> {
            return new ClientBuilder<KmsClient>(newClient);
    }

    private hcClient: HcClient;
    public constructor(client: HcClient) {
        this.hcClient = client;
    }

    public getPath() {
        return __dirname;
    }


    /**
     * - 功能介绍：批量添加删除密钥标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 批量添加删除密钥标签
     * @param {string} keyId 密钥ID
     * @param {BatchCreateKmsTagsRequestBody} batchCreateKmsTagsRequestBody action
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public batchCreateKmsTags(batchCreateKmsTagsRequest?: BatchCreateKmsTagsRequest): Promise<BatchCreateKmsTagsResponse> {
        const options = ParamCreater().batchCreateKmsTags(batchCreateKmsTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * - 功能介绍：撤销授权，授权用户撤销被授权用户操作密钥的权限。
     * - 说明：
     *    - 创建密钥的用户才能撤销该密钥授权。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 撤销授权
     * @param {RevokeGrantRequestBody} cancelGrantRequestBody revoke_grant
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public cancelGrant(cancelGrantRequest?: CancelGrantRequest): Promise<CancelGrantResponse> {
        const options = ParamCreater().cancelGrant(cancelGrantRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * - 功能介绍：取消计划删除密钥。
     * - 说明：密钥处于“计划删除”状态才能取消计划删除密钥。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 取消计划删除密钥
     * @param {OperateKeyRequestBody} cancelKeyDeletionRequestBody cancel_key_deletion
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public cancelKeyDeletion(cancelKeyDeletionRequest?: CancelKeyDeletionRequest): Promise<CancelKeyDeletionResponse> {
        const options = ParamCreater().cancelKeyDeletion(cancelKeyDeletionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * - 功能介绍：退役授权，表示被授权用户不再具有授权密钥的操作权。
     *   例如：用户A授权用户B可以操作密钥A/key，同时授权用户C可以撤销该授权，
     *   那么用户A、B、C均可退役该授权，退役授权后，用户B不再可以使用A/key。
     * - 须知：
     *      可执行退役授权的主体包括：
     *    - 创建授权的用户；
     *    - 授权中retiring_principal指向的用户；
     *    - 当授权的操作列表中包含retire-grant时，grantee_principal指向的用户。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 退役授权
     * @param {RevokeGrantRequestBody} cancelSelfGrantRequestBody retire_grant
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public cancelSelfGrant(cancelSelfGrantRequest?: CancelSelfGrantRequest): Promise<CancelSelfGrantResponse> {
        const options = ParamCreater().cancelSelfGrant(cancelSelfGrantRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * - 功能介绍：创建数据密钥，返回结果包含明文和密文。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建数据密钥
     * @param {CreateDatakeyRequestBody} createDatakeyRequestBody create_datakey
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createDatakey(createDatakeyRequest?: CreateDatakeyRequest): Promise<CreateDatakeyResponse> {
        const options = ParamCreater().createDatakey(createDatakeyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * - 功能介绍：创建数据密钥，返回结果只包含密文。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建不含明文数据密钥
     * @param {CreateDatakeyRequestBody} createDatakeyWithoutPlaintextRequestBody create_datakey_without_plaintext
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createDatakeyWithoutPlaintext(createDatakeyWithoutPlaintextRequest?: CreateDatakeyWithoutPlaintextRequest): Promise<CreateDatakeyWithoutPlaintextResponse> {
        const options = ParamCreater().createDatakeyWithoutPlaintext(createDatakeyWithoutPlaintextRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * - 功能介绍：创建授权，被授权用户可以对授权密钥进行操作。
     * - 说明：
     *    - 服务默认主密钥（密钥别名后缀为“/default”）不可以授权。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建授权
     * @param {CreateGrantRequestBody} createGrantRequestBody create_grant
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createGrant(createGrantRequest?: CreateGrantRequest): Promise<CreateGrantResponse> {
        const options = ParamCreater().createGrant(createGrantRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 创建用户主密钥，用户主密钥可以为对称密钥或非对称密钥。
     * - 对称密钥为长度为256位AES密钥或者128位SM4密钥，可用于小量数据的加密或者用于加密数据密钥。
     * - 非对称密钥可以为RSA密钥对或者ECC密钥对（包含SM2密钥对），可用于加解密数据、数字签名及验签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建密钥
     * @param {CreateKeyRequestBody} createKeyRequestBody 创建主密钥请求消息体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createKey(createKeyRequest?: CreateKeyRequest): Promise<CreateKeyResponse> {
        const options = ParamCreater().createKey(createKeyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * - \&quot;创建租户专属密钥库，专属密钥库使用DHSM实例作为密钥的存储\&quot;
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建专属密钥库
     * @param {CreateKeyStoreRequestBody} createKeyStoreRequestBody 创建专属密钥库请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createKeyStore(createKeyStoreRequest?: CreateKeyStoreRequest): Promise<CreateKeyStoreResponse> {
        const options = ParamCreater().createKeyStore(createKeyStoreRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * - 功能介绍：添加密钥标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 添加密钥标签
     * @param {string} keyId 密钥ID
     * @param {CreateKmsTagRequestBody} createKmsTagRequestBody 创建密钥标签消息请求体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createKmsTag(createKmsTagRequest?: CreateKmsTagRequest): Promise<CreateKmsTagResponse> {
        const options = ParamCreater().createKmsTag(createKmsTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * - 功能介绍：获取导入密钥的必要参数，包括密钥导入令牌和密钥加密公钥。
     * - 说明：返回的公钥类型默认为RSA_2048。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取密钥导入参数
     * @param {GetParametersForImportRequestBody} createParametersForImportRequestBody get_parameters_for_import
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createParametersForImport(createParametersForImportRequest?: CreateParametersForImportRequest): Promise<CreateParametersForImportResponse> {
        const options = ParamCreater().createParametersForImport(createParametersForImportRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * - 功能介绍：
     *   生成8~8192bit范围内的随机数。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 创建随机数
     * @param {GenRandomRequestBody} createRandomRequestBody gen_random
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public createRandom(createRandomRequest?: CreateRandomRequest): Promise<CreateRandomResponse> {
        const options = ParamCreater().createRandom(createRandomRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * - 功能介绍：解密数据。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 解密数据
     * @param {DecryptDataRequestBody} decryptDataRequestBody decrypt_data
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public decryptData(decryptDataRequest?: DecryptDataRequest): Promise<DecryptDataResponse> {
        const options = ParamCreater().decryptData(decryptDataRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * - 功能介绍：解密数据密钥，用指定的主密钥解密数据密钥。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 解密数据密钥
     * @param {DecryptDatakeyRequestBody} decryptDatakeyRequestBody decrypt_datakey
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public decryptDatakey(decryptDatakeyRequest?: DecryptDatakeyRequest): Promise<DecryptDatakeyResponse> {
        const options = ParamCreater().decryptDatakey(decryptDatakeyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * - 功能介绍：删除密钥材料信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除密钥材料
     * @param {OperateKeyRequestBody} deleteImportedKeyMaterialRequestBody delete_imported_key_material
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteImportedKeyMaterial(deleteImportedKeyMaterialRequest?: DeleteImportedKeyMaterialRequest): Promise<DeleteImportedKeyMaterialResponse> {
        const options = ParamCreater().deleteImportedKeyMaterial(deleteImportedKeyMaterialRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * - 功能介绍：计划多少天后删除密钥，可设置7天～1096天内删除密钥。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 计划删除密钥
     * @param {ScheduleKeyDeletionRequestBody} deleteKeyRequestBody schedule_key_deletion
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteKey(deleteKeyRequest?: DeleteKeyRequest): Promise<DeleteKeyResponse> {
        const options = ParamCreater().deleteKey(deleteKeyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 删除租户专属密钥库
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除专属密钥库
     * @param {string} keystoreId 密钥库ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteKeyStore(deleteKeyStoreRequest?: DeleteKeyStoreRequest): Promise<DeleteKeyStoreResponse> {
        const options = ParamCreater().deleteKeyStore(deleteKeyStoreRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * - 功能介绍：删除密钥标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 删除密钥标签
     * @param {string} keyId 密钥ID
     * @param {string} key 标签键的值
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public deleteTag(deleteTagRequest?: DeleteTagRequest): Promise<DeleteTagResponse> {
        const options = ParamCreater().deleteTag(deleteTagRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * - 功能介绍：禁用密钥，密钥禁用后不可以使用。
     * - 说明：密钥为启用状态才能禁用密钥。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 禁用密钥
     * @param {OperateKeyRequestBody} disableKeyRequestBody disable_key
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public disableKey(disableKeyRequest?: DisableKeyRequest): Promise<DisableKeyResponse> {
        const options = ParamCreater().disableKey(disableKeyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * - 功能介绍：关闭用户主密钥轮换。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 关闭密钥轮换
     * @param {OperateKeyRequestBody} disableKeyRotationRequestBody Disable_Key_rotation
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public disableKeyRotation(disableKeyRotationRequest?: DisableKeyRotationRequest): Promise<DisableKeyRotationResponse> {
        const options = ParamCreater().disableKeyRotation(disableKeyRotationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 禁用租户专属密钥库
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 禁用专属密钥库
     * @param {string} keystoreId 密钥库ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public disableKeyStore(disableKeyStoreRequest?: DisableKeyStoreRequest): Promise<DisableKeyStoreResponse> {
        const options = ParamCreater().disableKeyStore(disableKeyStoreRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * - 功能介绍：启用密钥，密钥启用后才可以使用。
     * - 说明：密钥为禁用状态才能启用密钥。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 启用密钥
     * @param {OperateKeyRequestBody} enableKeyRequestBody 启用密钥请求消息体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public enableKey(enableKeyRequest?: EnableKeyRequest): Promise<EnableKeyResponse> {
        const options = ParamCreater().enableKey(enableKeyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * - 功能介绍：开启用户主密钥轮换。
     * - 说明：
     *   - 开启密钥轮换后，默认轮换间隔时间为365天。
     *   - 默认主密钥及外部导入密钥不支持轮换操作。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 开启密钥轮换
     * @param {OperateKeyRequestBody} enableKeyRotationRequestBody Enable_Key_rotation
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public enableKeyRotation(enableKeyRotationRequest?: EnableKeyRotationRequest): Promise<EnableKeyRotationResponse> {
        const options = ParamCreater().enableKeyRotation(enableKeyRotationRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 启用租户专属密钥库
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 启用专属密钥库
     * @param {string} keystoreId 密钥库ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public enableKeyStore(enableKeyStoreRequest?: EnableKeyStoreRequest): Promise<EnableKeyStoreResponse> {
        const options = ParamCreater().enableKeyStore(enableKeyStoreRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * - 功能介绍：加密数据，用指定的用户主密钥加密数据。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 加密数据
     * @param {EncryptDataRequestBody} encryptDataRequestBody EncryptDataRequestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public encryptData(encryptDataRequest?: EncryptDataRequest): Promise<EncryptDataResponse> {
        const options = ParamCreater().encryptData(encryptDataRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * - 功能介绍：加密数据密钥，用指定的主密钥加密数据密钥。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 加密数据密钥
     * @param {EncryptDatakeyRequestBody} encryptDatakeyRequestBody encrypt_datakey
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public encryptDatakey(encryptDatakeyRequest?: EncryptDatakeyRequest): Promise<EncryptDatakeyResponse> {
        const options = ParamCreater().encryptDatakey(encryptDatakeyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 功能介绍：生成消息验证码
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 生成消息验证码
     * @param {GenerateMacRequestBody} generateMacRequestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public generateMac(generateMacRequest?: GenerateMacRequest): Promise<GenerateMacResponse> {
        const options = ParamCreater().generateMac(generateMacRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * - 功能介绍：导入密钥材料。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 导入密钥材料
     * @param {ImportKeyMaterialRequestBody} importKeyMaterialRequestBody import_key_material
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public importKeyMaterial(importKeyMaterialRequest?: ImportKeyMaterialRequest): Promise<ImportKeyMaterialResponse> {
        const options = ParamCreater().importKeyMaterial(importKeyMaterialRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * - 功能介绍：查询密钥的授权列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询授权列表
     * @param {ListGrantsRequestBody} listGrantsRequestBody list_grants
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listGrants(listGrantsRequest?: ListGrantsRequest): Promise<ListGrantsResponse> {
        const options = ParamCreater().listGrants(listGrantsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * - 功能介绍：查询密钥详细信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询密钥信息
     * @param {OperateKeyRequestBody} listKeyDetailRequestBody describe_key
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listKeyDetail(listKeyDetailRequest?: ListKeyDetailRequest): Promise<ListKeyDetailResponse> {
        const options = ParamCreater().listKeyDetail(listKeyDetailRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 查询租户专属密钥库列表
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询专属密钥库列表
     * @param {number} [limit] 指定查询返回记录条数，默认值10。
     * @param {number} [offset] 索引位置，从offset指定的下一条数据开始查询。
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listKeyStores(listKeyStoresRequest?: ListKeyStoresRequest): Promise<ListKeyStoresResponse> {
        const options = ParamCreater().listKeyStores(listKeyStoresRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * - 功能介绍：查询用户所有密钥列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询密钥列表
     * @param {ListKeysRequestBody} listKeysRequestBody list_keys
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listKeys(listKeysRequest?: ListKeysRequest): Promise<ListKeysResponse> {
        const options = ParamCreater().listKeys(listKeysRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * - 功能介绍：查询密钥实例。通过标签过滤，查询指定用户主密钥的详细信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询密钥实例
     * @param {string} resourceInstances 资源实例，固定值为resource_instances
     * @param {ListKmsByTagsRequestBody} listKmsByTagsRequestBody action
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listKmsByTags(listKmsByTagsRequest?: ListKmsByTagsRequest): Promise<ListKmsByTagsResponse> {
        const options = ParamCreater().listKmsByTags(listKmsByTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * - 功能介绍：查询用户在指定项目下的所有标签集合。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询项目标签
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listKmsTags(listKmsTagsRequest?: ListKmsTagsRequest): Promise<ListKmsTagsResponse> {
        const options = ParamCreater().listKmsTags();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * - 功能介绍：查询用户可以退役的授权列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询可退役授权列表
     * @param {ListRetirableGrantsRequestBody} listRetirableGrantsRequestBody list_retirable_grants
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listRetirableGrants(listRetirableGrantsRequest?: ListRetirableGrantsRequest): Promise<ListRetirableGrantsResponse> {
        const options = ParamCreater().listRetirableGrants(listRetirableGrantsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * - 功能介绍：查询跨区域密钥所支持的区域。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询跨区域密钥所支持的区域
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public listSupportRegions(listSupportRegionsRequest?: ListSupportRegionsRequest): Promise<ListSupportRegionsResponse> {
        const options = ParamCreater().listSupportRegions();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 将本区域的密钥复制到指定区域。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 复制密钥到指定区域
     * @param {string} keyId 待复制的密钥ID，36字节，满足正则匹配“^[0-9a-z]{8}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{12}$”。 例如：0d0466b0-e727-4d9c-b35d-f84bb474a37f。
     * @param {ReplicateKeyRequestBody} replicateKeyRequestBody 复制密钥请求消息体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public replicateKey(replicateKeyRequest?: ReplicateKeyRequest): Promise<ReplicateKeyResponse> {
        const options = ParamCreater().replicateKey(replicateKeyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * - 功能介绍：查询用户主密钥轮换状态。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询密钥轮换状态
     * @param {OperateKeyRequestBody} showKeyRotationStatusRequestBody get_key_rotation_status
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showKeyRotationStatus(showKeyRotationStatusRequest?: ShowKeyRotationStatusRequest): Promise<ShowKeyRotationStatusResponse> {
        const options = ParamCreater().showKeyRotationStatus(showKeyRotationStatusRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 获取租户专属密钥库
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 获取专属密钥库
     * @param {string} keystoreId 密钥库ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showKeyStore(showKeyStoreRequest?: ShowKeyStoreRequest): Promise<ShowKeyStoreResponse> {
        const options = ParamCreater().showKeyStore(showKeyStoreRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * - 功能介绍：查询密钥标签。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询密钥标签
     * @param {string} keyId 密钥ID
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showKmsTags(showKmsTagsRequest?: ShowKmsTagsRequest): Promise<ShowKmsTagsResponse> {
        const options = ParamCreater().showKmsTags(showKmsTagsRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * - 查询用户指定非对称密钥的公钥信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询公钥信息
     * @param {OperateKeyRequestBody} showPublicKeyRequestBody get_publickey
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showPublicKey(showPublicKeyRequest?: ShowPublicKeyRequest): Promise<ShowPublicKeyResponse> {
        const options = ParamCreater().showPublicKey(showPublicKeyRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * - 功能介绍：查询实例数，获取用户已经创建的用户主密钥数量。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询实例数
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showUserInstances(showUserInstancesRequest?: ShowUserInstancesRequest): Promise<ShowUserInstancesResponse> {
        const options = ParamCreater().showUserInstances();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * - 功能介绍：查询配额，查询用户可以创建的用户主密钥配额总数及当前使用量信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询配额
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showUserQuotas(showUserQuotasRequest?: ShowUserQuotasRequest): Promise<ShowUserQuotasResponse> {
        const options = ParamCreater().showUserQuotas();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * - 功能介绍：使用非对称密钥的私钥对消息或消息摘要进行数字签名。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 签名数据
     * @param {SignRequestBody} signRequestBody SignRequestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public sign(signRequest?: SignRequest): Promise<SignResponse> {
        const options = ParamCreater().sign(signRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * - 功能介绍：修改用户主密钥别名。
     * - 说明：
     *    - 服务默认主密钥（密钥别名后缀为“/default”）不可以修改。
     *    - 密钥处于“计划删除”状态，密钥别名不可以修改。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改密钥别名
     * @param {UpdateKeyAliasRequestBody} updateKeyAliasRequestBody update_key_alias
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateKeyAlias(updateKeyAliasRequest?: UpdateKeyAliasRequest): Promise<UpdateKeyAliasResponse> {
        const options = ParamCreater().updateKeyAlias(updateKeyAliasRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * - 功能介绍：修改用户主密钥描述信息。
     * - 说明：
     *    - 服务默认主密钥（密钥别名后缀为“/default”）不可以修改。
     *    - 密钥处于“计划删除”状态，密钥描述不可以修改。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改密钥描述
     * @param {UpdateKeyDescriptionRequestBody} updateKeyDescriptionRequestBody update_key_description
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateKeyDescription(updateKeyDescriptionRequest?: UpdateKeyDescriptionRequest): Promise<UpdateKeyDescriptionResponse> {
        const options = ParamCreater().updateKeyDescription(updateKeyDescriptionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * - 功能介绍：修改用户主密钥轮换周期。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改密钥轮换周期
     * @param {UpdateKeyRotationIntervalRequestBody} updateKeyRotationIntervalRequestBody update_key_rotation_interval
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updateKeyRotationInterval(updateKeyRotationIntervalRequest?: UpdateKeyRotationIntervalRequest): Promise<UpdateKeyRotationIntervalResponse> {
        const options = ParamCreater().updateKeyRotationInterval(updateKeyRotationIntervalRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 修改密钥所属的主区域。修改后当前区域会变为副本区域。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 修改密钥所属的主区域
     * @param {string} keyId 待更新的密钥ID，36字节，满足正则匹配“^[0-9a-z]{8}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{4}-[0-9a-z]{12}$”。 例如：0d0466b0-e727-4d9c-b35d-f84bb474a37f。
     * @param {UpdatePrimaryRegionRequestBody} updatePrimaryRegionRequestBody 更新密钥主区域请求消息体
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public updatePrimaryRegion(updatePrimaryRegionRequest?: UpdatePrimaryRegionRequest): Promise<UpdatePrimaryRegionResponse> {
        const options = ParamCreater().updatePrimaryRegion(updatePrimaryRegionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * - 功能介绍：使用非对称密钥的私钥对消息或消息摘要进行签名验证。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 验证签名
     * @param {VerifyRequestBody} validateSignatureRequestBody VerifyRequestBody
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public validateSignature(validateSignatureRequest?: ValidateSignatureRequest): Promise<ValidateSignatureResponse> {
        const options = ParamCreater().validateSignature(validateSignatureRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * 功能介绍：校验消息验证码
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 校验消息验证码
     * @param {VerifyMacRequestBody} verifyMacRequestBody 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public verifyMac(verifyMacRequest?: VerifyMacRequest): Promise<VerifyMacResponse> {
        const options = ParamCreater().verifyMac(verifyMacRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * - 功能介绍：查指定API版本信息。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询指定版本信息
     * @param {string} versionId API版本号
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showVersion(showVersionRequest?: ShowVersionRequest): Promise<ShowVersionResponse> {
        const options = ParamCreater().showVersion(showVersionRequest);

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }

    /**
     * - 功能介绍：查询API版本信息列表。
     * 
     * Please refer to HUAWEI cloud API Explorer for details.
     *
     * @summary 查询版本信息列表
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     */
    public showVersions(showVersionsRequest?: ShowVersionsRequest): Promise<ShowVersionsResponse> {
        const options = ParamCreater().showVersions();

         // @ts-ignore
        options['responseHeaders'] = [''];

        return this.hcClient.sendRequest(options);
    }
}

export const ParamCreater = function () {
    return {
    
        /**
         * - 功能介绍：批量添加删除密钥标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        batchCreateKmsTags(batchCreateKmsTagsRequest?: BatchCreateKmsTagsRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/kms/{key_id}/tags/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let keyId;

            if (batchCreateKmsTagsRequest !== null && batchCreateKmsTagsRequest !== undefined) {
                if (batchCreateKmsTagsRequest instanceof BatchCreateKmsTagsRequest) {
                    keyId = batchCreateKmsTagsRequest.keyId;
                    body = batchCreateKmsTagsRequest.body
                } else {
                    keyId = batchCreateKmsTagsRequest['key_id'];
                    body = batchCreateKmsTagsRequest['body'];
                }
            }

        
            if (keyId === null || keyId === undefined) {
            throw new RequiredError('keyId','Required parameter keyId was null or undefined when calling batchCreateKmsTags.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'key_id': keyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * - 功能介绍：撤销授权，授权用户撤销被授权用户操作密钥的权限。
         * - 说明：
         *    - 创建密钥的用户才能撤销该密钥授权。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        cancelGrant(cancelGrantRequest?: CancelGrantRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/kms/revoke-grant",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (cancelGrantRequest !== null && cancelGrantRequest !== undefined) {
                if (cancelGrantRequest instanceof CancelGrantRequest) {
                    body = cancelGrantRequest.body
                } else {
                    body = cancelGrantRequest['body'];
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
         * - 功能介绍：取消计划删除密钥。
         * - 说明：密钥处于“计划删除”状态才能取消计划删除密钥。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        cancelKeyDeletion(cancelKeyDeletionRequest?: CancelKeyDeletionRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/kms/cancel-key-deletion",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (cancelKeyDeletionRequest !== null && cancelKeyDeletionRequest !== undefined) {
                if (cancelKeyDeletionRequest instanceof CancelKeyDeletionRequest) {
                    body = cancelKeyDeletionRequest.body
                } else {
                    body = cancelKeyDeletionRequest['body'];
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
         * - 功能介绍：退役授权，表示被授权用户不再具有授权密钥的操作权。
         *   例如：用户A授权用户B可以操作密钥A/key，同时授权用户C可以撤销该授权，
         *   那么用户A、B、C均可退役该授权，退役授权后，用户B不再可以使用A/key。
         * - 须知：
         *      可执行退役授权的主体包括：
         *    - 创建授权的用户；
         *    - 授权中retiring_principal指向的用户；
         *    - 当授权的操作列表中包含retire-grant时，grantee_principal指向的用户。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        cancelSelfGrant(cancelSelfGrantRequest?: CancelSelfGrantRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/kms/retire-grant",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (cancelSelfGrantRequest !== null && cancelSelfGrantRequest !== undefined) {
                if (cancelSelfGrantRequest instanceof CancelSelfGrantRequest) {
                    body = cancelSelfGrantRequest.body
                } else {
                    body = cancelSelfGrantRequest['body'];
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
         * - 功能介绍：创建数据密钥，返回结果包含明文和密文。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createDatakey(createDatakeyRequest?: CreateDatakeyRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/kms/create-datakey",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createDatakeyRequest !== null && createDatakeyRequest !== undefined) {
                if (createDatakeyRequest instanceof CreateDatakeyRequest) {
                    body = createDatakeyRequest.body
                } else {
                    body = createDatakeyRequest['body'];
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
         * - 功能介绍：创建数据密钥，返回结果只包含密文。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createDatakeyWithoutPlaintext(createDatakeyWithoutPlaintextRequest?: CreateDatakeyWithoutPlaintextRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/kms/create-datakey-without-plaintext",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createDatakeyWithoutPlaintextRequest !== null && createDatakeyWithoutPlaintextRequest !== undefined) {
                if (createDatakeyWithoutPlaintextRequest instanceof CreateDatakeyWithoutPlaintextRequest) {
                    body = createDatakeyWithoutPlaintextRequest.body
                } else {
                    body = createDatakeyWithoutPlaintextRequest['body'];
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
         * - 功能介绍：创建授权，被授权用户可以对授权密钥进行操作。
         * - 说明：
         *    - 服务默认主密钥（密钥别名后缀为“/default”）不可以授权。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createGrant(createGrantRequest?: CreateGrantRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/kms/create-grant",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createGrantRequest !== null && createGrantRequest !== undefined) {
                if (createGrantRequest instanceof CreateGrantRequest) {
                    body = createGrantRequest.body
                } else {
                    body = createGrantRequest['body'];
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
         * 创建用户主密钥，用户主密钥可以为对称密钥或非对称密钥。
         * - 对称密钥为长度为256位AES密钥或者128位SM4密钥，可用于小量数据的加密或者用于加密数据密钥。
         * - 非对称密钥可以为RSA密钥对或者ECC密钥对（包含SM2密钥对），可用于加解密数据、数字签名及验签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createKey(createKeyRequest?: CreateKeyRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/kms/create-key",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createKeyRequest !== null && createKeyRequest !== undefined) {
                if (createKeyRequest instanceof CreateKeyRequest) {
                    body = createKeyRequest.body
                } else {
                    body = createKeyRequest['body'];
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
         * - \&quot;创建租户专属密钥库，专属密钥库使用DHSM实例作为密钥的存储\&quot;
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createKeyStore(createKeyStoreRequest?: CreateKeyStoreRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/keystores",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createKeyStoreRequest !== null && createKeyStoreRequest !== undefined) {
                if (createKeyStoreRequest instanceof CreateKeyStoreRequest) {
                    body = createKeyStoreRequest.body
                } else {
                    body = createKeyStoreRequest['body'];
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
         * - 功能介绍：添加密钥标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createKmsTag(createKmsTagRequest?: CreateKmsTagRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/kms/{key_id}/tags",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let keyId;

            if (createKmsTagRequest !== null && createKmsTagRequest !== undefined) {
                if (createKmsTagRequest instanceof CreateKmsTagRequest) {
                    keyId = createKmsTagRequest.keyId;
                    body = createKmsTagRequest.body
                } else {
                    keyId = createKmsTagRequest['key_id'];
                    body = createKmsTagRequest['body'];
                }
            }

        
            if (keyId === null || keyId === undefined) {
            throw new RequiredError('keyId','Required parameter keyId was null or undefined when calling createKmsTag.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'key_id': keyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * - 功能介绍：获取导入密钥的必要参数，包括密钥导入令牌和密钥加密公钥。
         * - 说明：返回的公钥类型默认为RSA_2048。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createParametersForImport(createParametersForImportRequest?: CreateParametersForImportRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/kms/get-parameters-for-import",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createParametersForImportRequest !== null && createParametersForImportRequest !== undefined) {
                if (createParametersForImportRequest instanceof CreateParametersForImportRequest) {
                    body = createParametersForImportRequest.body
                } else {
                    body = createParametersForImportRequest['body'];
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
         * - 功能介绍：
         *   生成8~8192bit范围内的随机数。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        createRandom(createRandomRequest?: CreateRandomRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/kms/gen-random",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (createRandomRequest !== null && createRandomRequest !== undefined) {
                if (createRandomRequest instanceof CreateRandomRequest) {
                    body = createRandomRequest.body
                } else {
                    body = createRandomRequest['body'];
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
         * - 功能介绍：解密数据。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        decryptData(decryptDataRequest?: DecryptDataRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/kms/decrypt-data",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (decryptDataRequest !== null && decryptDataRequest !== undefined) {
                if (decryptDataRequest instanceof DecryptDataRequest) {
                    body = decryptDataRequest.body
                } else {
                    body = decryptDataRequest['body'];
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
         * - 功能介绍：解密数据密钥，用指定的主密钥解密数据密钥。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        decryptDatakey(decryptDatakeyRequest?: DecryptDatakeyRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/kms/decrypt-datakey",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (decryptDatakeyRequest !== null && decryptDatakeyRequest !== undefined) {
                if (decryptDatakeyRequest instanceof DecryptDatakeyRequest) {
                    body = decryptDatakeyRequest.body
                } else {
                    body = decryptDatakeyRequest['body'];
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
         * - 功能介绍：删除密钥材料信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteImportedKeyMaterial(deleteImportedKeyMaterialRequest?: DeleteImportedKeyMaterialRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/kms/delete-imported-key-material",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (deleteImportedKeyMaterialRequest !== null && deleteImportedKeyMaterialRequest !== undefined) {
                if (deleteImportedKeyMaterialRequest instanceof DeleteImportedKeyMaterialRequest) {
                    body = deleteImportedKeyMaterialRequest.body
                } else {
                    body = deleteImportedKeyMaterialRequest['body'];
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
         * - 功能介绍：计划多少天后删除密钥，可设置7天～1096天内删除密钥。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteKey(deleteKeyRequest?: DeleteKeyRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/kms/schedule-key-deletion",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (deleteKeyRequest !== null && deleteKeyRequest !== undefined) {
                if (deleteKeyRequest instanceof DeleteKeyRequest) {
                    body = deleteKeyRequest.body
                } else {
                    body = deleteKeyRequest['body'];
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
         * 删除租户专属密钥库
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteKeyStore(deleteKeyStoreRequest?: DeleteKeyStoreRequest) {
            const options = {
                method: "DELETE",
                url: "/v1.0/{project_id}/keystores/{keystore_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let keystoreId;

            if (deleteKeyStoreRequest !== null && deleteKeyStoreRequest !== undefined) {
                if (deleteKeyStoreRequest instanceof DeleteKeyStoreRequest) {
                    keystoreId = deleteKeyStoreRequest.keystoreId;
                } else {
                    keystoreId = deleteKeyStoreRequest['keystore_id'];
                }
            }

        
            if (keystoreId === null || keystoreId === undefined) {
            throw new RequiredError('keystoreId','Required parameter keystoreId was null or undefined when calling deleteKeyStore.');
            }

            options.pathParams = { 'keystore_id': keystoreId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * - 功能介绍：删除密钥标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        deleteTag(deleteTagRequest?: DeleteTagRequest) {
            const options = {
                method: "DELETE",
                url: "/v1.0/{project_id}/kms/{key_id}/tags/{key}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let keyId;
            
            let key;

            if (deleteTagRequest !== null && deleteTagRequest !== undefined) {
                if (deleteTagRequest instanceof DeleteTagRequest) {
                    keyId = deleteTagRequest.keyId;
                    key = deleteTagRequest.key;
                } else {
                    keyId = deleteTagRequest['key_id'];
                    key = deleteTagRequest['key'];
                }
            }

        
            if (keyId === null || keyId === undefined) {
            throw new RequiredError('keyId','Required parameter keyId was null or undefined when calling deleteTag.');
            }
            if (key === null || key === undefined) {
            throw new RequiredError('key','Required parameter key was null or undefined when calling deleteTag.');
            }

            options.pathParams = { 'key_id': keyId,'key': key, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * - 功能介绍：禁用密钥，密钥禁用后不可以使用。
         * - 说明：密钥为启用状态才能禁用密钥。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        disableKey(disableKeyRequest?: DisableKeyRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/kms/disable-key",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (disableKeyRequest !== null && disableKeyRequest !== undefined) {
                if (disableKeyRequest instanceof DisableKeyRequest) {
                    body = disableKeyRequest.body
                } else {
                    body = disableKeyRequest['body'];
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
         * - 功能介绍：关闭用户主密钥轮换。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        disableKeyRotation(disableKeyRotationRequest?: DisableKeyRotationRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/kms/disable-key-rotation",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (disableKeyRotationRequest !== null && disableKeyRotationRequest !== undefined) {
                if (disableKeyRotationRequest instanceof DisableKeyRotationRequest) {
                    body = disableKeyRotationRequest.body
                } else {
                    body = disableKeyRotationRequest['body'];
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
         * 禁用租户专属密钥库
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        disableKeyStore(disableKeyStoreRequest?: DisableKeyStoreRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/keystores/{keystore_id}/disable",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let keystoreId;

            if (disableKeyStoreRequest !== null && disableKeyStoreRequest !== undefined) {
                if (disableKeyStoreRequest instanceof DisableKeyStoreRequest) {
                    keystoreId = disableKeyStoreRequest.keystoreId;
                } else {
                    keystoreId = disableKeyStoreRequest['keystore_id'];
                }
            }

        
            if (keystoreId === null || keystoreId === undefined) {
            throw new RequiredError('keystoreId','Required parameter keystoreId was null or undefined when calling disableKeyStore.');
            }

            options.pathParams = { 'keystore_id': keystoreId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * - 功能介绍：启用密钥，密钥启用后才可以使用。
         * - 说明：密钥为禁用状态才能启用密钥。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        enableKey(enableKeyRequest?: EnableKeyRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/kms/enable-key",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (enableKeyRequest !== null && enableKeyRequest !== undefined) {
                if (enableKeyRequest instanceof EnableKeyRequest) {
                    body = enableKeyRequest.body
                } else {
                    body = enableKeyRequest['body'];
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
         * - 功能介绍：开启用户主密钥轮换。
         * - 说明：
         *   - 开启密钥轮换后，默认轮换间隔时间为365天。
         *   - 默认主密钥及外部导入密钥不支持轮换操作。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        enableKeyRotation(enableKeyRotationRequest?: EnableKeyRotationRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/kms/enable-key-rotation",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (enableKeyRotationRequest !== null && enableKeyRotationRequest !== undefined) {
                if (enableKeyRotationRequest instanceof EnableKeyRotationRequest) {
                    body = enableKeyRotationRequest.body
                } else {
                    body = enableKeyRotationRequest['body'];
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
         * 启用租户专属密钥库
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        enableKeyStore(enableKeyStoreRequest?: EnableKeyStoreRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/keystores/{keystore_id}/enable",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let keystoreId;

            if (enableKeyStoreRequest !== null && enableKeyStoreRequest !== undefined) {
                if (enableKeyStoreRequest instanceof EnableKeyStoreRequest) {
                    keystoreId = enableKeyStoreRequest.keystoreId;
                } else {
                    keystoreId = enableKeyStoreRequest['keystore_id'];
                }
            }

        
            if (keystoreId === null || keystoreId === undefined) {
            throw new RequiredError('keystoreId','Required parameter keystoreId was null or undefined when calling enableKeyStore.');
            }

            options.pathParams = { 'keystore_id': keystoreId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * - 功能介绍：加密数据，用指定的用户主密钥加密数据。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        encryptData(encryptDataRequest?: EncryptDataRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/kms/encrypt-data",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (encryptDataRequest !== null && encryptDataRequest !== undefined) {
                if (encryptDataRequest instanceof EncryptDataRequest) {
                    body = encryptDataRequest.body
                } else {
                    body = encryptDataRequest['body'];
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
         * - 功能介绍：加密数据密钥，用指定的主密钥加密数据密钥。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        encryptDatakey(encryptDatakeyRequest?: EncryptDatakeyRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/kms/encrypt-datakey",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (encryptDatakeyRequest !== null && encryptDatakeyRequest !== undefined) {
                if (encryptDatakeyRequest instanceof EncryptDatakeyRequest) {
                    body = encryptDatakeyRequest.body
                } else {
                    body = encryptDatakeyRequest['body'];
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
         * 功能介绍：生成消息验证码
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        generateMac(generateMacRequest?: GenerateMacRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/kms/generate-mac",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (generateMacRequest !== null && generateMacRequest !== undefined) {
                if (generateMacRequest instanceof GenerateMacRequest) {
                    body = generateMacRequest.body
                } else {
                    body = generateMacRequest['body'];
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
         * - 功能介绍：导入密钥材料。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        importKeyMaterial(importKeyMaterialRequest?: ImportKeyMaterialRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/kms/import-key-material",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (importKeyMaterialRequest !== null && importKeyMaterialRequest !== undefined) {
                if (importKeyMaterialRequest instanceof ImportKeyMaterialRequest) {
                    body = importKeyMaterialRequest.body
                } else {
                    body = importKeyMaterialRequest['body'];
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
         * - 功能介绍：查询密钥的授权列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listGrants(listGrantsRequest?: ListGrantsRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/kms/list-grants",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (listGrantsRequest !== null && listGrantsRequest !== undefined) {
                if (listGrantsRequest instanceof ListGrantsRequest) {
                    body = listGrantsRequest.body
                } else {
                    body = listGrantsRequest['body'];
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
         * - 功能介绍：查询密钥详细信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listKeyDetail(listKeyDetailRequest?: ListKeyDetailRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/kms/describe-key",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (listKeyDetailRequest !== null && listKeyDetailRequest !== undefined) {
                if (listKeyDetailRequest instanceof ListKeyDetailRequest) {
                    body = listKeyDetailRequest.body
                } else {
                    body = listKeyDetailRequest['body'];
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
         * 查询租户专属密钥库列表
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listKeyStores(listKeyStoresRequest?: ListKeyStoresRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/keystores",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;
            
            let limit;
            
            let offset;

            if (listKeyStoresRequest !== null && listKeyStoresRequest !== undefined) {
                if (listKeyStoresRequest instanceof ListKeyStoresRequest) {
                    limit = listKeyStoresRequest.limit;
                    offset = listKeyStoresRequest.offset;
                } else {
                    limit = listKeyStoresRequest['limit'];
                    offset = listKeyStoresRequest['offset'];
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
         * - 功能介绍：查询用户所有密钥列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listKeys(listKeysRequest?: ListKeysRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/kms/list-keys",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (listKeysRequest !== null && listKeysRequest !== undefined) {
                if (listKeysRequest instanceof ListKeysRequest) {
                    body = listKeysRequest.body
                } else {
                    body = listKeysRequest['body'];
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
         * - 功能介绍：查询密钥实例。通过标签过滤，查询指定用户主密钥的详细信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listKmsByTags(listKmsByTagsRequest?: ListKmsByTagsRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/kms/{resource_instances}/action",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let resourceInstances;

            if (listKmsByTagsRequest !== null && listKmsByTagsRequest !== undefined) {
                if (listKmsByTagsRequest instanceof ListKmsByTagsRequest) {
                    resourceInstances = listKmsByTagsRequest.resourceInstances;
                    body = listKmsByTagsRequest.body
                } else {
                    resourceInstances = listKmsByTagsRequest['resource_instances'];
                    body = listKmsByTagsRequest['body'];
                }
            }

        
            if (resourceInstances === null || resourceInstances === undefined) {
            throw new RequiredError('resourceInstances','Required parameter resourceInstances was null or undefined when calling listKmsByTags.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'resource_instances': resourceInstances, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * - 功能介绍：查询用户在指定项目下的所有标签集合。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listKmsTags() {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/kms/tags",
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
         * - 功能介绍：查询用户可以退役的授权列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listRetirableGrants(listRetirableGrantsRequest?: ListRetirableGrantsRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/kms/list-retirable-grants",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (listRetirableGrantsRequest !== null && listRetirableGrantsRequest !== undefined) {
                if (listRetirableGrantsRequest instanceof ListRetirableGrantsRequest) {
                    body = listRetirableGrantsRequest.body
                } else {
                    body = listRetirableGrantsRequest['body'];
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
         * - 功能介绍：查询跨区域密钥所支持的区域。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        listSupportRegions() {
            const options = {
                method: "GET",
                url: "/v2/{project_id}/kms/regions",
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
         * 将本区域的密钥复制到指定区域。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        replicateKey(replicateKeyRequest?: ReplicateKeyRequest) {
            const options = {
                method: "POST",
                url: "/v2/{project_id}/kms/keys/{key_id}/replicate",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let keyId;

            if (replicateKeyRequest !== null && replicateKeyRequest !== undefined) {
                if (replicateKeyRequest instanceof ReplicateKeyRequest) {
                    keyId = replicateKeyRequest.keyId;
                    body = replicateKeyRequest.body
                } else {
                    keyId = replicateKeyRequest['key_id'];
                    body = replicateKeyRequest['body'];
                }
            }

        
            if (keyId === null || keyId === undefined) {
            throw new RequiredError('keyId','Required parameter keyId was null or undefined when calling replicateKey.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'key_id': keyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * - 功能介绍：查询用户主密钥轮换状态。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showKeyRotationStatus(showKeyRotationStatusRequest?: ShowKeyRotationStatusRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/kms/get-key-rotation-status",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (showKeyRotationStatusRequest !== null && showKeyRotationStatusRequest !== undefined) {
                if (showKeyRotationStatusRequest instanceof ShowKeyRotationStatusRequest) {
                    body = showKeyRotationStatusRequest.body
                } else {
                    body = showKeyRotationStatusRequest['body'];
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
         * 获取租户专属密钥库
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showKeyStore(showKeyStoreRequest?: ShowKeyStoreRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/keystores/{keystore_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let keystoreId;

            if (showKeyStoreRequest !== null && showKeyStoreRequest !== undefined) {
                if (showKeyStoreRequest instanceof ShowKeyStoreRequest) {
                    keystoreId = showKeyStoreRequest.keystoreId;
                } else {
                    keystoreId = showKeyStoreRequest['keystore_id'];
                }
            }

        
            if (keystoreId === null || keystoreId === undefined) {
            throw new RequiredError('keystoreId','Required parameter keystoreId was null or undefined when calling showKeyStore.');
            }

            options.pathParams = { 'keystore_id': keystoreId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * - 功能介绍：查询密钥标签。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showKmsTags(showKmsTagsRequest?: ShowKmsTagsRequest) {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/kms/{key_id}/tags",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let keyId;

            if (showKmsTagsRequest !== null && showKmsTagsRequest !== undefined) {
                if (showKmsTagsRequest instanceof ShowKmsTagsRequest) {
                    keyId = showKmsTagsRequest.keyId;
                } else {
                    keyId = showKmsTagsRequest['key_id'];
                }
            }

        
            if (keyId === null || keyId === undefined) {
            throw new RequiredError('keyId','Required parameter keyId was null or undefined when calling showKmsTags.');
            }

            options.pathParams = { 'key_id': keyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * - 查询用户指定非对称密钥的公钥信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showPublicKey(showPublicKeyRequest?: ShowPublicKeyRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/kms/get-publickey",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (showPublicKeyRequest !== null && showPublicKeyRequest !== undefined) {
                if (showPublicKeyRequest instanceof ShowPublicKeyRequest) {
                    body = showPublicKeyRequest.body
                } else {
                    body = showPublicKeyRequest['body'];
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
         * - 功能介绍：查询实例数，获取用户已经创建的用户主密钥数量。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showUserInstances() {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/kms/user-instances",
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
         * - 功能介绍：查询配额，查询用户可以创建的用户主密钥配额总数及当前使用量信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showUserQuotas() {
            const options = {
                method: "GET",
                url: "/v1.0/{project_id}/kms/user-quotas",
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
         * - 功能介绍：使用非对称密钥的私钥对消息或消息摘要进行数字签名。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        sign(signRequest?: SignRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/kms/sign",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (signRequest !== null && signRequest !== undefined) {
                if (signRequest instanceof SignRequest) {
                    body = signRequest.body
                } else {
                    body = signRequest['body'];
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
         * - 功能介绍：修改用户主密钥别名。
         * - 说明：
         *    - 服务默认主密钥（密钥别名后缀为“/default”）不可以修改。
         *    - 密钥处于“计划删除”状态，密钥别名不可以修改。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateKeyAlias(updateKeyAliasRequest?: UpdateKeyAliasRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/kms/update-key-alias",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (updateKeyAliasRequest !== null && updateKeyAliasRequest !== undefined) {
                if (updateKeyAliasRequest instanceof UpdateKeyAliasRequest) {
                    body = updateKeyAliasRequest.body
                } else {
                    body = updateKeyAliasRequest['body'];
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
         * - 功能介绍：修改用户主密钥描述信息。
         * - 说明：
         *    - 服务默认主密钥（密钥别名后缀为“/default”）不可以修改。
         *    - 密钥处于“计划删除”状态，密钥描述不可以修改。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateKeyDescription(updateKeyDescriptionRequest?: UpdateKeyDescriptionRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/kms/update-key-description",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (updateKeyDescriptionRequest !== null && updateKeyDescriptionRequest !== undefined) {
                if (updateKeyDescriptionRequest instanceof UpdateKeyDescriptionRequest) {
                    body = updateKeyDescriptionRequest.body
                } else {
                    body = updateKeyDescriptionRequest['body'];
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
         * - 功能介绍：修改用户主密钥轮换周期。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updateKeyRotationInterval(updateKeyRotationIntervalRequest?: UpdateKeyRotationIntervalRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/kms/update-key-rotation-interval",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (updateKeyRotationIntervalRequest !== null && updateKeyRotationIntervalRequest !== undefined) {
                if (updateKeyRotationIntervalRequest instanceof UpdateKeyRotationIntervalRequest) {
                    body = updateKeyRotationIntervalRequest.body
                } else {
                    body = updateKeyRotationIntervalRequest['body'];
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
         * 修改密钥所属的主区域。修改后当前区域会变为副本区域。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        updatePrimaryRegion(updatePrimaryRegionRequest?: UpdatePrimaryRegionRequest) {
            const options = {
                method: "PUT",
                url: "/v2/{project_id}/kms/keys/{key_id}/update-primary-region",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;
            
            let keyId;

            if (updatePrimaryRegionRequest !== null && updatePrimaryRegionRequest !== undefined) {
                if (updatePrimaryRegionRequest instanceof UpdatePrimaryRegionRequest) {
                    keyId = updatePrimaryRegionRequest.keyId;
                    body = updatePrimaryRegionRequest.body
                } else {
                    keyId = updatePrimaryRegionRequest['key_id'];
                    body = updatePrimaryRegionRequest['body'];
                }
            }

        
            if (keyId === null || keyId === undefined) {
            throw new RequiredError('keyId','Required parameter keyId was null or undefined when calling updatePrimaryRegion.');
            }
            if (body === null || body === undefined) {
                throw new RequiredError('body','Required parameter body was null or undefined when calling body.');
            }
            localVarHeaderParameter['Content-Type'] = 'application/json;charset=UTF-8';

            options.data = body !== undefined ? body : {};
            options.pathParams = { 'key_id': keyId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * - 功能介绍：使用非对称密钥的私钥对消息或消息摘要进行签名验证。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        validateSignature(validateSignatureRequest?: ValidateSignatureRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/kms/verify",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (validateSignatureRequest !== null && validateSignatureRequest !== undefined) {
                if (validateSignatureRequest instanceof ValidateSignatureRequest) {
                    body = validateSignatureRequest.body
                } else {
                    body = validateSignatureRequest['body'];
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
         * 功能介绍：校验消息验证码
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        verifyMac(verifyMacRequest?: VerifyMacRequest) {
            const options = {
                method: "POST",
                url: "/v1.0/{project_id}/kms/verify-mac",
                contentType: "application/json;charset=UTF-8",
                queryParams: {},
                pathParams: {},
                headers: {},
                data: {}
            };
            const localVarHeaderParameter = {} as any;

            let body: any;

            if (verifyMacRequest !== null && verifyMacRequest !== undefined) {
                if (verifyMacRequest instanceof VerifyMacRequest) {
                    body = verifyMacRequest.body
                } else {
                    body = verifyMacRequest['body'];
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
         * - 功能介绍：查指定API版本信息。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showVersion(showVersionRequest?: ShowVersionRequest) {
            const options = {
                method: "GET",
                url: "/{version_id}",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;

            
            let versionId;

            if (showVersionRequest !== null && showVersionRequest !== undefined) {
                if (showVersionRequest instanceof ShowVersionRequest) {
                    versionId = showVersionRequest.versionId;
                } else {
                    versionId = showVersionRequest['version_id'];
                }
            }

        
            if (versionId === null || versionId === undefined) {
            throw new RequiredError('versionId','Required parameter versionId was null or undefined when calling showVersion.');
            }

            options.pathParams = { 'version_id': versionId, };
            options.headers = localVarHeaderParameter;
            return options;
        },
    
        /**
         * - 功能介绍：查询API版本信息列表。
         * 
         * Please refer to HUAWEI cloud API Explorer for details.
         */
        showVersions() {
            const options = {
                method: "GET",
                url: "/",
                contentType: "application/json",
                queryParams: {},
                pathParams: {},
                headers: {}
            };
            const localVarHeaderParameter = {} as any;


            options.headers = localVarHeaderParameter;
            return options;
        },
    
    }
};

function newClient(client: HcClient): KmsClient {
    return new KmsClient(client);
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