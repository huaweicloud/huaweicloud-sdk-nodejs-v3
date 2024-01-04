import { SnapshotSpecItems } from './SnapshotSpecItems';


export class SnapshotSpec {
    public items?: Array<SnapshotSpecItems>;
    public constructor() { 
    }
    public withItems(items: Array<SnapshotSpecItems>): SnapshotSpec {
        this['items'] = items;
        return this;
    }
}