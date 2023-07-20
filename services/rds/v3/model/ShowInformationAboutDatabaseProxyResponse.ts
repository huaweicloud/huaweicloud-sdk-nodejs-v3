import { MasterInstance } from './MasterInstance';
import { Proxy } from './Proxy';
import { ReadonlyInstances } from './ReadonlyInstances';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowInformationAboutDatabaseProxyResponse extends SdkResponse {
    public proxy?: Proxy;
    private 'master_instance'?: MasterInstance;
    private 'readonly_instances'?: Array<ReadonlyInstances>;
    public constructor() { 
        super();
    }
    public withProxy(proxy: Proxy): ShowInformationAboutDatabaseProxyResponse {
        this['proxy'] = proxy;
        return this;
    }
    public withMasterInstance(masterInstance: MasterInstance): ShowInformationAboutDatabaseProxyResponse {
        this['master_instance'] = masterInstance;
        return this;
    }
    public set masterInstance(masterInstance: MasterInstance  | undefined) {
        this['master_instance'] = masterInstance;
    }
    public get masterInstance(): MasterInstance | undefined {
        return this['master_instance'];
    }
    public withReadonlyInstances(readonlyInstances: Array<ReadonlyInstances>): ShowInformationAboutDatabaseProxyResponse {
        this['readonly_instances'] = readonlyInstances;
        return this;
    }
    public set readonlyInstances(readonlyInstances: Array<ReadonlyInstances>  | undefined) {
        this['readonly_instances'] = readonlyInstances;
    }
    public get readonlyInstances(): Array<ReadonlyInstances> | undefined {
        return this['readonly_instances'];
    }
}