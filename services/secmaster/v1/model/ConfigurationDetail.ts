import { FileConfiguration } from './FileConfiguration';


export class ConfigurationDetail {
    private 'config_status'?: ConfigurationDetailConfigStatusEnum | string;
    public list?: Array<FileConfiguration>;
    private 'node_id'?: string;
    private 'node_name'?: string;
    public specification?: string;
    public constructor(list?: Array<FileConfiguration>) { 
        this['list'] = list;
    }
    public withConfigStatus(configStatus: ConfigurationDetailConfigStatusEnum | string): ConfigurationDetail {
        this['config_status'] = configStatus;
        return this;
    }
    public set configStatus(configStatus: ConfigurationDetailConfigStatusEnum | string  | undefined) {
        this['config_status'] = configStatus;
    }
    public get configStatus(): ConfigurationDetailConfigStatusEnum | string | undefined {
        return this['config_status'];
    }
    public withList(list: Array<FileConfiguration>): ConfigurationDetail {
        this['list'] = list;
        return this;
    }
    public withNodeId(nodeId: string): ConfigurationDetail {
        this['node_id'] = nodeId;
        return this;
    }
    public set nodeId(nodeId: string  | undefined) {
        this['node_id'] = nodeId;
    }
    public get nodeId(): string | undefined {
        return this['node_id'];
    }
    public withNodeName(nodeName: string): ConfigurationDetail {
        this['node_name'] = nodeName;
        return this;
    }
    public set nodeName(nodeName: string  | undefined) {
        this['node_name'] = nodeName;
    }
    public get nodeName(): string | undefined {
        return this['node_name'];
    }
    public withSpecification(specification: string): ConfigurationDetail {
        this['specification'] = specification;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ConfigurationDetailConfigStatusEnum {
    UN_SAVED = 'UN_SAVED',
    SAVE_AND_UN_APPLY = 'SAVE_AND_UN_APPLY',
    MOVE_AND_UN_APPLY = 'MOVE_AND_UN_APPLY',
    APPLYING = 'APPLYING',
    FAIL_APPLY = 'FAIL_APPLY',
    APPLIED = 'APPLIED'
}
