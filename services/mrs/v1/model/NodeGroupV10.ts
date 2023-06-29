

export class NodeGroupV10 {
    private 'GroupName'?: string | undefined;
    private 'NodeNum'?: number | undefined;
    private 'NodeSize'?: string | undefined;
    private 'NodeSpecId'?: string | undefined;
    private 'VmProductId'?: string | undefined;
    private 'VmSpecCode'?: string | undefined;
    private 'NodeProductId'?: string | undefined;
    private 'RootVolumeSize'?: number | undefined;
    private 'RootVolumeProductId'?: string | undefined;
    private 'RootVolumeType'?: string | undefined;
    private 'RootVolumeResourceSpecCode'?: string | undefined;
    private 'RootVolumeResourceType'?: string | undefined;
    private 'DataVolumeType'?: NodeGroupV10DataVolumeTypeEnum | undefined;
    private 'DataVolumeCount'?: number | undefined;
    private 'DataVolumeSize'?: number | undefined;
    private 'DataVolumeProductId'?: string | undefined;
    private 'DataVolumeResourceSpecCode'?: string | undefined;
    private 'DataVolumeResourceType'?: string | undefined;
    public constructor() { 
    }
    public withGroupName(groupName: string): NodeGroupV10 {
        this['GroupName'] = groupName;
        return this;
    }
    public set groupName(groupName: string | undefined) {
        this['GroupName'] = groupName;
    }
    public get groupName() {
        return this['GroupName'];
    }
    public withNodeNum(nodeNum: number): NodeGroupV10 {
        this['NodeNum'] = nodeNum;
        return this;
    }
    public set nodeNum(nodeNum: number | undefined) {
        this['NodeNum'] = nodeNum;
    }
    public get nodeNum() {
        return this['NodeNum'];
    }
    public withNodeSize(nodeSize: string): NodeGroupV10 {
        this['NodeSize'] = nodeSize;
        return this;
    }
    public set nodeSize(nodeSize: string | undefined) {
        this['NodeSize'] = nodeSize;
    }
    public get nodeSize() {
        return this['NodeSize'];
    }
    public withNodeSpecId(nodeSpecId: string): NodeGroupV10 {
        this['NodeSpecId'] = nodeSpecId;
        return this;
    }
    public set nodeSpecId(nodeSpecId: string | undefined) {
        this['NodeSpecId'] = nodeSpecId;
    }
    public get nodeSpecId() {
        return this['NodeSpecId'];
    }
    public withVmProductId(vmProductId: string): NodeGroupV10 {
        this['VmProductId'] = vmProductId;
        return this;
    }
    public set vmProductId(vmProductId: string | undefined) {
        this['VmProductId'] = vmProductId;
    }
    public get vmProductId() {
        return this['VmProductId'];
    }
    public withVmSpecCode(vmSpecCode: string): NodeGroupV10 {
        this['VmSpecCode'] = vmSpecCode;
        return this;
    }
    public set vmSpecCode(vmSpecCode: string | undefined) {
        this['VmSpecCode'] = vmSpecCode;
    }
    public get vmSpecCode() {
        return this['VmSpecCode'];
    }
    public withNodeProductId(nodeProductId: string): NodeGroupV10 {
        this['NodeProductId'] = nodeProductId;
        return this;
    }
    public set nodeProductId(nodeProductId: string | undefined) {
        this['NodeProductId'] = nodeProductId;
    }
    public get nodeProductId() {
        return this['NodeProductId'];
    }
    public withRootVolumeSize(rootVolumeSize: number): NodeGroupV10 {
        this['RootVolumeSize'] = rootVolumeSize;
        return this;
    }
    public set rootVolumeSize(rootVolumeSize: number | undefined) {
        this['RootVolumeSize'] = rootVolumeSize;
    }
    public get rootVolumeSize() {
        return this['RootVolumeSize'];
    }
    public withRootVolumeProductId(rootVolumeProductId: string): NodeGroupV10 {
        this['RootVolumeProductId'] = rootVolumeProductId;
        return this;
    }
    public set rootVolumeProductId(rootVolumeProductId: string | undefined) {
        this['RootVolumeProductId'] = rootVolumeProductId;
    }
    public get rootVolumeProductId() {
        return this['RootVolumeProductId'];
    }
    public withRootVolumeType(rootVolumeType: string): NodeGroupV10 {
        this['RootVolumeType'] = rootVolumeType;
        return this;
    }
    public set rootVolumeType(rootVolumeType: string | undefined) {
        this['RootVolumeType'] = rootVolumeType;
    }
    public get rootVolumeType() {
        return this['RootVolumeType'];
    }
    public withRootVolumeResourceSpecCode(rootVolumeResourceSpecCode: string): NodeGroupV10 {
        this['RootVolumeResourceSpecCode'] = rootVolumeResourceSpecCode;
        return this;
    }
    public set rootVolumeResourceSpecCode(rootVolumeResourceSpecCode: string | undefined) {
        this['RootVolumeResourceSpecCode'] = rootVolumeResourceSpecCode;
    }
    public get rootVolumeResourceSpecCode() {
        return this['RootVolumeResourceSpecCode'];
    }
    public withRootVolumeResourceType(rootVolumeResourceType: string): NodeGroupV10 {
        this['RootVolumeResourceType'] = rootVolumeResourceType;
        return this;
    }
    public set rootVolumeResourceType(rootVolumeResourceType: string | undefined) {
        this['RootVolumeResourceType'] = rootVolumeResourceType;
    }
    public get rootVolumeResourceType() {
        return this['RootVolumeResourceType'];
    }
    public withDataVolumeType(dataVolumeType: NodeGroupV10DataVolumeTypeEnum): NodeGroupV10 {
        this['DataVolumeType'] = dataVolumeType;
        return this;
    }
    public set dataVolumeType(dataVolumeType: NodeGroupV10DataVolumeTypeEnum | undefined) {
        this['DataVolumeType'] = dataVolumeType;
    }
    public get dataVolumeType() {
        return this['DataVolumeType'];
    }
    public withDataVolumeCount(dataVolumeCount: number): NodeGroupV10 {
        this['DataVolumeCount'] = dataVolumeCount;
        return this;
    }
    public set dataVolumeCount(dataVolumeCount: number | undefined) {
        this['DataVolumeCount'] = dataVolumeCount;
    }
    public get dataVolumeCount() {
        return this['DataVolumeCount'];
    }
    public withDataVolumeSize(dataVolumeSize: number): NodeGroupV10 {
        this['DataVolumeSize'] = dataVolumeSize;
        return this;
    }
    public set dataVolumeSize(dataVolumeSize: number | undefined) {
        this['DataVolumeSize'] = dataVolumeSize;
    }
    public get dataVolumeSize() {
        return this['DataVolumeSize'];
    }
    public withDataVolumeProductId(dataVolumeProductId: string): NodeGroupV10 {
        this['DataVolumeProductId'] = dataVolumeProductId;
        return this;
    }
    public set dataVolumeProductId(dataVolumeProductId: string | undefined) {
        this['DataVolumeProductId'] = dataVolumeProductId;
    }
    public get dataVolumeProductId() {
        return this['DataVolumeProductId'];
    }
    public withDataVolumeResourceSpecCode(dataVolumeResourceSpecCode: string): NodeGroupV10 {
        this['DataVolumeResourceSpecCode'] = dataVolumeResourceSpecCode;
        return this;
    }
    public set dataVolumeResourceSpecCode(dataVolumeResourceSpecCode: string | undefined) {
        this['DataVolumeResourceSpecCode'] = dataVolumeResourceSpecCode;
    }
    public get dataVolumeResourceSpecCode() {
        return this['DataVolumeResourceSpecCode'];
    }
    public withDataVolumeResourceType(dataVolumeResourceType: string): NodeGroupV10 {
        this['DataVolumeResourceType'] = dataVolumeResourceType;
        return this;
    }
    public set dataVolumeResourceType(dataVolumeResourceType: string | undefined) {
        this['DataVolumeResourceType'] = dataVolumeResourceType;
    }
    public get dataVolumeResourceType() {
        return this['DataVolumeResourceType'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum NodeGroupV10DataVolumeTypeEnum {
    SATA = 'SATA',
    SAS = 'SAS',
    SSD = 'SSD',
    GPSSD = 'GPSSD'
}
