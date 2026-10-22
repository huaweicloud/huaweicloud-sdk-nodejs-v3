

export class BiactiveInstanceV3 {
    public id?: string;
    public name?: string;
    public status?: string;
    public actions?: Array<string>;
    private 'project_id'?: string;
    private 'project_name'?: string;
    private 'region_code'?: string;
    private 'node_num'?: number;
    public vcpus?: string;
    public ram?: string;
    private 'disk_size'?: string;
    private 'used_disk_size'?: string;
    public cidr?: string;
    public constructor() { 
    }
    public withId(id: string): BiactiveInstanceV3 {
        this['id'] = id;
        return this;
    }
    public withName(name: string): BiactiveInstanceV3 {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): BiactiveInstanceV3 {
        this['status'] = status;
        return this;
    }
    public withActions(actions: Array<string>): BiactiveInstanceV3 {
        this['actions'] = actions;
        return this;
    }
    public withProjectId(projectId: string): BiactiveInstanceV3 {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withProjectName(projectName: string): BiactiveInstanceV3 {
        this['project_name'] = projectName;
        return this;
    }
    public set projectName(projectName: string  | undefined) {
        this['project_name'] = projectName;
    }
    public get projectName(): string | undefined {
        return this['project_name'];
    }
    public withRegionCode(regionCode: string): BiactiveInstanceV3 {
        this['region_code'] = regionCode;
        return this;
    }
    public set regionCode(regionCode: string  | undefined) {
        this['region_code'] = regionCode;
    }
    public get regionCode(): string | undefined {
        return this['region_code'];
    }
    public withNodeNum(nodeNum: number): BiactiveInstanceV3 {
        this['node_num'] = nodeNum;
        return this;
    }
    public set nodeNum(nodeNum: number  | undefined) {
        this['node_num'] = nodeNum;
    }
    public get nodeNum(): number | undefined {
        return this['node_num'];
    }
    public withVcpus(vcpus: string): BiactiveInstanceV3 {
        this['vcpus'] = vcpus;
        return this;
    }
    public withRam(ram: string): BiactiveInstanceV3 {
        this['ram'] = ram;
        return this;
    }
    public withDiskSize(diskSize: string): BiactiveInstanceV3 {
        this['disk_size'] = diskSize;
        return this;
    }
    public set diskSize(diskSize: string  | undefined) {
        this['disk_size'] = diskSize;
    }
    public get diskSize(): string | undefined {
        return this['disk_size'];
    }
    public withUsedDiskSize(usedDiskSize: string): BiactiveInstanceV3 {
        this['used_disk_size'] = usedDiskSize;
        return this;
    }
    public set usedDiskSize(usedDiskSize: string  | undefined) {
        this['used_disk_size'] = usedDiskSize;
    }
    public get usedDiskSize(): string | undefined {
        return this['used_disk_size'];
    }
    public withCidr(cidr: string): BiactiveInstanceV3 {
        this['cidr'] = cidr;
        return this;
    }
}