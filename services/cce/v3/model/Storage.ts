import { StorageGroups } from './StorageGroups';
import { StorageSelectors } from './StorageSelectors';


export class Storage {
    public storageSelectors: Array<StorageSelectors>;
    public storageGroups: Array<StorageGroups>;
    public constructor(storageSelectors?: any, storageGroups?: any) { 
        this['storageSelectors'] = storageSelectors;
        this['storageGroups'] = storageGroups;
    }
    public withStorageSelectors(storageSelectors: Array<StorageSelectors>): Storage {
        this['storageSelectors'] = storageSelectors;
        return this;
    }
    public withStorageGroups(storageGroups: Array<StorageGroups>): Storage {
        this['storageGroups'] = storageGroups;
        return this;
    }
}