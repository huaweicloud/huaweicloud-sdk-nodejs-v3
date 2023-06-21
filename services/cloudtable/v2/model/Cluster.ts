import { Datastore } from './Datastore';
import { Instance } from './Instance';


export class Cluster {
    private 'auth_mode'?: string | undefined;
    private 'enable_lemon'?: boolean | undefined;
    private 'enable_openTSDB'?: boolean | undefined;
    public instance: Instance;
    public name: string;
    private 'storage_size'?: number | undefined;
    private 'storage_type': string | undefined;
    private 'vpc_id': string | undefined;
    public datastore: Datastore;
    public constructor(instance?: any, name?: any, storageType?: any, vpcId?: any, datastore?: any) { 
        this['instance'] = instance;
        this['name'] = name;
        this['storage_type'] = storageType;
        this['vpc_id'] = vpcId;
        this['datastore'] = datastore;
    }
    public withAuthMode(authMode: string): Cluster {
        this['auth_mode'] = authMode;
        return this;
    }
    public set authMode(authMode: string | undefined) {
        this['auth_mode'] = authMode;
    }
    public get authMode() {
        return this['auth_mode'];
    }
    public withEnableLemon(enableLemon: boolean): Cluster {
        this['enable_lemon'] = enableLemon;
        return this;
    }
    public set enableLemon(enableLemon: boolean | undefined) {
        this['enable_lemon'] = enableLemon;
    }
    public get enableLemon() {
        return this['enable_lemon'];
    }
    public withEnableOpenTSDB(enableOpenTSDB: boolean): Cluster {
        this['enable_openTSDB'] = enableOpenTSDB;
        return this;
    }
    public set enableOpenTSDB(enableOpenTSDB: boolean | undefined) {
        this['enable_openTSDB'] = enableOpenTSDB;
    }
    public get enableOpenTSDB() {
        return this['enable_openTSDB'];
    }
    public withInstance(instance: Instance): Cluster {
        this['instance'] = instance;
        return this;
    }
    public withName(name: string): Cluster {
        this['name'] = name;
        return this;
    }
    public withStorageSize(storageSize: number): Cluster {
        this['storage_size'] = storageSize;
        return this;
    }
    public set storageSize(storageSize: number | undefined) {
        this['storage_size'] = storageSize;
    }
    public get storageSize() {
        return this['storage_size'];
    }
    public withStorageType(storageType: string): Cluster {
        this['storage_type'] = storageType;
        return this;
    }
    public set storageType(storageType: string | undefined) {
        this['storage_type'] = storageType;
    }
    public get storageType() {
        return this['storage_type'];
    }
    public withVpcId(vpcId: string): Cluster {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId() {
        return this['vpc_id'];
    }
    public withDatastore(datastore: Datastore): Cluster {
        this['datastore'] = datastore;
        return this;
    }
}