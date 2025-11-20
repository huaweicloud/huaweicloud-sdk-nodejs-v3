

export class IamAccount {
    private 'iam_user'?: string;
    private 'iam_user_id'?: string;
    private 'user_account'?: string;
    private 'iam_token'?: string;
    private 'iam_domain'?: string;
    private 'iam_domain_id'?: string;
    private 'iam_x_domain_id'?: string;
    private 'iam_x_domain_type'?: string;
    private 'iam_project_id'?: string;
    private 'iam_project_name'?: string;
    public language?: string;
    private 'instance_id'?: string;
    private 'assumed_by_domain_id'?: string;
    private 'assumed_by_user_id'?: string;
    private 'assumed_by_user_name'?: string;
    public roles?: Array<string>;
    private 'exclusive_project_id'?: string;
    private 'eps_enable'?: boolean;
    private 'shared_project_name'?: string;
    public authorization?: string;
    private 'context_attributes'?: string;
    private 'user_profile'?: string;
    private 'sts_token'?: string;
    private 'access_key_id'?: string;
    private 'secret_access_key'?: string;
    private 'source_account'?: string;
    private 'source_urn'?: string;
    private 'request_proof'?: string;
    private 'x_project_id'?: string;
    private 'fulfillment_agency'?: string;
    private 'operation_id'?: string;
    public constructor() { 
    }
    public withIamUser(iamUser: string): IamAccount {
        this['iam_user'] = iamUser;
        return this;
    }
    public set iamUser(iamUser: string  | undefined) {
        this['iam_user'] = iamUser;
    }
    public get iamUser(): string | undefined {
        return this['iam_user'];
    }
    public withIamUserId(iamUserId: string): IamAccount {
        this['iam_user_id'] = iamUserId;
        return this;
    }
    public set iamUserId(iamUserId: string  | undefined) {
        this['iam_user_id'] = iamUserId;
    }
    public get iamUserId(): string | undefined {
        return this['iam_user_id'];
    }
    public withUserAccount(userAccount: string): IamAccount {
        this['user_account'] = userAccount;
        return this;
    }
    public set userAccount(userAccount: string  | undefined) {
        this['user_account'] = userAccount;
    }
    public get userAccount(): string | undefined {
        return this['user_account'];
    }
    public withIamToken(iamToken: string): IamAccount {
        this['iam_token'] = iamToken;
        return this;
    }
    public set iamToken(iamToken: string  | undefined) {
        this['iam_token'] = iamToken;
    }
    public get iamToken(): string | undefined {
        return this['iam_token'];
    }
    public withIamDomain(iamDomain: string): IamAccount {
        this['iam_domain'] = iamDomain;
        return this;
    }
    public set iamDomain(iamDomain: string  | undefined) {
        this['iam_domain'] = iamDomain;
    }
    public get iamDomain(): string | undefined {
        return this['iam_domain'];
    }
    public withIamDomainId(iamDomainId: string): IamAccount {
        this['iam_domain_id'] = iamDomainId;
        return this;
    }
    public set iamDomainId(iamDomainId: string  | undefined) {
        this['iam_domain_id'] = iamDomainId;
    }
    public get iamDomainId(): string | undefined {
        return this['iam_domain_id'];
    }
    public withIamXDomainId(iamXDomainId: string): IamAccount {
        this['iam_x_domain_id'] = iamXDomainId;
        return this;
    }
    public set iamXDomainId(iamXDomainId: string  | undefined) {
        this['iam_x_domain_id'] = iamXDomainId;
    }
    public get iamXDomainId(): string | undefined {
        return this['iam_x_domain_id'];
    }
    public withIamXDomainType(iamXDomainType: string): IamAccount {
        this['iam_x_domain_type'] = iamXDomainType;
        return this;
    }
    public set iamXDomainType(iamXDomainType: string  | undefined) {
        this['iam_x_domain_type'] = iamXDomainType;
    }
    public get iamXDomainType(): string | undefined {
        return this['iam_x_domain_type'];
    }
    public withIamProjectId(iamProjectId: string): IamAccount {
        this['iam_project_id'] = iamProjectId;
        return this;
    }
    public set iamProjectId(iamProjectId: string  | undefined) {
        this['iam_project_id'] = iamProjectId;
    }
    public get iamProjectId(): string | undefined {
        return this['iam_project_id'];
    }
    public withIamProjectName(iamProjectName: string): IamAccount {
        this['iam_project_name'] = iamProjectName;
        return this;
    }
    public set iamProjectName(iamProjectName: string  | undefined) {
        this['iam_project_name'] = iamProjectName;
    }
    public get iamProjectName(): string | undefined {
        return this['iam_project_name'];
    }
    public withLanguage(language: string): IamAccount {
        this['language'] = language;
        return this;
    }
    public withInstanceId(instanceId: string): IamAccount {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withAssumedByDomainId(assumedByDomainId: string): IamAccount {
        this['assumed_by_domain_id'] = assumedByDomainId;
        return this;
    }
    public set assumedByDomainId(assumedByDomainId: string  | undefined) {
        this['assumed_by_domain_id'] = assumedByDomainId;
    }
    public get assumedByDomainId(): string | undefined {
        return this['assumed_by_domain_id'];
    }
    public withAssumedByUserId(assumedByUserId: string): IamAccount {
        this['assumed_by_user_id'] = assumedByUserId;
        return this;
    }
    public set assumedByUserId(assumedByUserId: string  | undefined) {
        this['assumed_by_user_id'] = assumedByUserId;
    }
    public get assumedByUserId(): string | undefined {
        return this['assumed_by_user_id'];
    }
    public withAssumedByUserName(assumedByUserName: string): IamAccount {
        this['assumed_by_user_name'] = assumedByUserName;
        return this;
    }
    public set assumedByUserName(assumedByUserName: string  | undefined) {
        this['assumed_by_user_name'] = assumedByUserName;
    }
    public get assumedByUserName(): string | undefined {
        return this['assumed_by_user_name'];
    }
    public withRoles(roles: Array<string>): IamAccount {
        this['roles'] = roles;
        return this;
    }
    public withExclusiveProjectId(exclusiveProjectId: string): IamAccount {
        this['exclusive_project_id'] = exclusiveProjectId;
        return this;
    }
    public set exclusiveProjectId(exclusiveProjectId: string  | undefined) {
        this['exclusive_project_id'] = exclusiveProjectId;
    }
    public get exclusiveProjectId(): string | undefined {
        return this['exclusive_project_id'];
    }
    public withEpsEnable(epsEnable: boolean): IamAccount {
        this['eps_enable'] = epsEnable;
        return this;
    }
    public set epsEnable(epsEnable: boolean  | undefined) {
        this['eps_enable'] = epsEnable;
    }
    public get epsEnable(): boolean | undefined {
        return this['eps_enable'];
    }
    public withSharedProjectName(sharedProjectName: string): IamAccount {
        this['shared_project_name'] = sharedProjectName;
        return this;
    }
    public set sharedProjectName(sharedProjectName: string  | undefined) {
        this['shared_project_name'] = sharedProjectName;
    }
    public get sharedProjectName(): string | undefined {
        return this['shared_project_name'];
    }
    public withAuthorization(authorization: string): IamAccount {
        this['authorization'] = authorization;
        return this;
    }
    public withContextAttributes(contextAttributes: string): IamAccount {
        this['context_attributes'] = contextAttributes;
        return this;
    }
    public set contextAttributes(contextAttributes: string  | undefined) {
        this['context_attributes'] = contextAttributes;
    }
    public get contextAttributes(): string | undefined {
        return this['context_attributes'];
    }
    public withUserProfile(userProfile: string): IamAccount {
        this['user_profile'] = userProfile;
        return this;
    }
    public set userProfile(userProfile: string  | undefined) {
        this['user_profile'] = userProfile;
    }
    public get userProfile(): string | undefined {
        return this['user_profile'];
    }
    public withStsToken(stsToken: string): IamAccount {
        this['sts_token'] = stsToken;
        return this;
    }
    public set stsToken(stsToken: string  | undefined) {
        this['sts_token'] = stsToken;
    }
    public get stsToken(): string | undefined {
        return this['sts_token'];
    }
    public withAccessKeyId(accessKeyId: string): IamAccount {
        this['access_key_id'] = accessKeyId;
        return this;
    }
    public set accessKeyId(accessKeyId: string  | undefined) {
        this['access_key_id'] = accessKeyId;
    }
    public get accessKeyId(): string | undefined {
        return this['access_key_id'];
    }
    public withSecretAccessKey(secretAccessKey: string): IamAccount {
        this['secret_access_key'] = secretAccessKey;
        return this;
    }
    public set secretAccessKey(secretAccessKey: string  | undefined) {
        this['secret_access_key'] = secretAccessKey;
    }
    public get secretAccessKey(): string | undefined {
        return this['secret_access_key'];
    }
    public withSourceAccount(sourceAccount: string): IamAccount {
        this['source_account'] = sourceAccount;
        return this;
    }
    public set sourceAccount(sourceAccount: string  | undefined) {
        this['source_account'] = sourceAccount;
    }
    public get sourceAccount(): string | undefined {
        return this['source_account'];
    }
    public withSourceUrn(sourceUrn: string): IamAccount {
        this['source_urn'] = sourceUrn;
        return this;
    }
    public set sourceUrn(sourceUrn: string  | undefined) {
        this['source_urn'] = sourceUrn;
    }
    public get sourceUrn(): string | undefined {
        return this['source_urn'];
    }
    public withRequestProof(requestProof: string): IamAccount {
        this['request_proof'] = requestProof;
        return this;
    }
    public set requestProof(requestProof: string  | undefined) {
        this['request_proof'] = requestProof;
    }
    public get requestProof(): string | undefined {
        return this['request_proof'];
    }
    public withXProjectId(xProjectId: string): IamAccount {
        this['x_project_id'] = xProjectId;
        return this;
    }
    public set xProjectId(xProjectId: string  | undefined) {
        this['x_project_id'] = xProjectId;
    }
    public get xProjectId(): string | undefined {
        return this['x_project_id'];
    }
    public withFulfillmentAgency(fulfillmentAgency: string): IamAccount {
        this['fulfillment_agency'] = fulfillmentAgency;
        return this;
    }
    public set fulfillmentAgency(fulfillmentAgency: string  | undefined) {
        this['fulfillment_agency'] = fulfillmentAgency;
    }
    public get fulfillmentAgency(): string | undefined {
        return this['fulfillment_agency'];
    }
    public withOperationId(operationId: string): IamAccount {
        this['operation_id'] = operationId;
        return this;
    }
    public set operationId(operationId: string  | undefined) {
        this['operation_id'] = operationId;
    }
    public get operationId(): string | undefined {
        return this['operation_id'];
    }
}