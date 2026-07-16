import { SecretVolume } from './SecretVolume';


export class ServiceSecret {
    private 'secret_enable'?: boolean;
    private 'secret_type'?: string;
    private 'secret_volumes'?: Array<SecretVolume>;
    private 'group_enable'?: boolean;
    private 'group_id'?: number;
    public constructor() { 
    }
    public withSecretEnable(secretEnable: boolean): ServiceSecret {
        this['secret_enable'] = secretEnable;
        return this;
    }
    public set secretEnable(secretEnable: boolean  | undefined) {
        this['secret_enable'] = secretEnable;
    }
    public get secretEnable(): boolean | undefined {
        return this['secret_enable'];
    }
    public withSecretType(secretType: string): ServiceSecret {
        this['secret_type'] = secretType;
        return this;
    }
    public set secretType(secretType: string  | undefined) {
        this['secret_type'] = secretType;
    }
    public get secretType(): string | undefined {
        return this['secret_type'];
    }
    public withSecretVolumes(secretVolumes: Array<SecretVolume>): ServiceSecret {
        this['secret_volumes'] = secretVolumes;
        return this;
    }
    public set secretVolumes(secretVolumes: Array<SecretVolume>  | undefined) {
        this['secret_volumes'] = secretVolumes;
    }
    public get secretVolumes(): Array<SecretVolume> | undefined {
        return this['secret_volumes'];
    }
    public withGroupEnable(groupEnable: boolean): ServiceSecret {
        this['group_enable'] = groupEnable;
        return this;
    }
    public set groupEnable(groupEnable: boolean  | undefined) {
        this['group_enable'] = groupEnable;
    }
    public get groupEnable(): boolean | undefined {
        return this['group_enable'];
    }
    public withGroupId(groupId: number): ServiceSecret {
        this['group_id'] = groupId;
        return this;
    }
    public set groupId(groupId: number  | undefined) {
        this['group_id'] = groupId;
    }
    public get groupId(): number | undefined {
        return this['group_id'];
    }
}