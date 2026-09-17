import { DataDiskCleanUpOption } from './DataDiskCleanUpOption';
import { InPlaceMigrateNodeExtendParam } from './InPlaceMigrateNodeExtendParam';
import { InplaceMigrateNodeItem } from './InplaceMigrateNodeItem';


export class InPlaceMigratetoNodesSpec {
    public nodes?: Array<InplaceMigrateNodeItem>;
    public dataDiskCleanUpOption?: DataDiskCleanUpOption;
    public extendParam?: InPlaceMigrateNodeExtendParam;
    public constructor(nodes?: Array<InplaceMigrateNodeItem>) { 
        this['nodes'] = nodes;
    }
    public withNodes(nodes: Array<InplaceMigrateNodeItem>): InPlaceMigratetoNodesSpec {
        this['nodes'] = nodes;
        return this;
    }
    public withDataDiskCleanUpOption(dataDiskCleanUpOption: DataDiskCleanUpOption): InPlaceMigratetoNodesSpec {
        this['dataDiskCleanUpOption'] = dataDiskCleanUpOption;
        return this;
    }
    public withExtendParam(extendParam: InPlaceMigrateNodeExtendParam): InPlaceMigratetoNodesSpec {
        this['extendParam'] = extendParam;
        return this;
    }
}