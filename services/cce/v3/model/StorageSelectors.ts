import { StorageSelectorsMatchLabels } from './StorageSelectorsMatchLabels';


export class StorageSelectors {
    public name: string;
    public storageType: string;
    public matchLabels?: StorageSelectorsMatchLabels;
    public constructor(name?: any, storageType?: any) { 
        this['name'] = name;
        this['storageType'] = storageType;
    }
    public withName(name: string): StorageSelectors {
        this['name'] = name;
        return this;
    }
    public withStorageType(storageType: string): StorageSelectors {
        this['storageType'] = storageType;
        return this;
    }
    public withMatchLabels(matchLabels: StorageSelectorsMatchLabels): StorageSelectors {
        this['matchLabels'] = matchLabels;
        return this;
    }
}