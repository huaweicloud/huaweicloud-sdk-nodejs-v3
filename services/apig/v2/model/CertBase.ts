

export class CertBase {
    public id?: string;
    public name?: string;
    public type?: CertBaseTypeEnum | string;
    private 'instance_id'?: string;
    private 'project_id'?: string;
    private 'common_name'?: string;
    public san?: Array<string>;
    private 'not_after'?: Date;
    private 'signature_algorithm'?: string;
    private 'create_time'?: Date;
    private 'update_time'?: Date;
    private 'is_has_trusted_root_ca'?: boolean;
    public constructor() { 
    }
    public withId(id: string): CertBase {
        this['id'] = id;
        return this;
    }
    public withName(name: string): CertBase {
        this['name'] = name;
        return this;
    }
    public withType(type: CertBaseTypeEnum | string): CertBase {
        this['type'] = type;
        return this;
    }
    public withInstanceId(instanceId: string): CertBase {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withProjectId(projectId: string): CertBase {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withCommonName(commonName: string): CertBase {
        this['common_name'] = commonName;
        return this;
    }
    public set commonName(commonName: string  | undefined) {
        this['common_name'] = commonName;
    }
    public get commonName(): string | undefined {
        return this['common_name'];
    }
    public withSan(san: Array<string>): CertBase {
        this['san'] = san;
        return this;
    }
    public withNotAfter(notAfter: Date): CertBase {
        this['not_after'] = notAfter;
        return this;
    }
    public set notAfter(notAfter: Date  | undefined) {
        this['not_after'] = notAfter;
    }
    public get notAfter(): Date | undefined {
        return this['not_after'];
    }
    public withSignatureAlgorithm(signatureAlgorithm: string): CertBase {
        this['signature_algorithm'] = signatureAlgorithm;
        return this;
    }
    public set signatureAlgorithm(signatureAlgorithm: string  | undefined) {
        this['signature_algorithm'] = signatureAlgorithm;
    }
    public get signatureAlgorithm(): string | undefined {
        return this['signature_algorithm'];
    }
    public withCreateTime(createTime: Date): CertBase {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: Date  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): Date | undefined {
        return this['create_time'];
    }
    public withUpdateTime(updateTime: Date): CertBase {
        this['update_time'] = updateTime;
        return this;
    }
    public set updateTime(updateTime: Date  | undefined) {
        this['update_time'] = updateTime;
    }
    public get updateTime(): Date | undefined {
        return this['update_time'];
    }
    public withIsHasTrustedRootCa(isHasTrustedRootCa: boolean): CertBase {
        this['is_has_trusted_root_ca'] = isHasTrustedRootCa;
        return this;
    }
    public set isHasTrustedRootCa(isHasTrustedRootCa: boolean  | undefined) {
        this['is_has_trusted_root_ca'] = isHasTrustedRootCa;
    }
    public get isHasTrustedRootCa(): boolean | undefined {
        return this['is_has_trusted_root_ca'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CertBaseTypeEnum {
    GLOBAL = 'global',
    INSTANCE = 'instance'
}
