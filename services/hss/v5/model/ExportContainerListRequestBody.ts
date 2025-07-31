import { ExportContainerListRequestBodyCreateTime } from './ExportContainerListRequestBodyCreateTime';


export class ExportContainerListRequestBody {
    private 'cluster_container'?: boolean;
    private 'cluster_type'?: string;
    private 'cluster_name'?: string;
    private 'container_name'?: string;
    private 'pod_name'?: string;
    private 'image_name'?: string;
    public status?: string;
    public risky?: boolean;
    private 'create_time'?: ExportContainerListRequestBodyCreateTime;
    private 'cpu_limit'?: string;
    private 'memory_limit'?: string;
    private 'export_headers'?: Array<Array<string>>;
    public constructor(exportHeaders?: Array<Array<string>>) { 
        this['export_headers'] = exportHeaders;
    }
    public withClusterContainer(clusterContainer: boolean): ExportContainerListRequestBody {
        this['cluster_container'] = clusterContainer;
        return this;
    }
    public set clusterContainer(clusterContainer: boolean  | undefined) {
        this['cluster_container'] = clusterContainer;
    }
    public get clusterContainer(): boolean | undefined {
        return this['cluster_container'];
    }
    public withClusterType(clusterType: string): ExportContainerListRequestBody {
        this['cluster_type'] = clusterType;
        return this;
    }
    public set clusterType(clusterType: string  | undefined) {
        this['cluster_type'] = clusterType;
    }
    public get clusterType(): string | undefined {
        return this['cluster_type'];
    }
    public withClusterName(clusterName: string): ExportContainerListRequestBody {
        this['cluster_name'] = clusterName;
        return this;
    }
    public set clusterName(clusterName: string  | undefined) {
        this['cluster_name'] = clusterName;
    }
    public get clusterName(): string | undefined {
        return this['cluster_name'];
    }
    public withContainerName(containerName: string): ExportContainerListRequestBody {
        this['container_name'] = containerName;
        return this;
    }
    public set containerName(containerName: string  | undefined) {
        this['container_name'] = containerName;
    }
    public get containerName(): string | undefined {
        return this['container_name'];
    }
    public withPodName(podName: string): ExportContainerListRequestBody {
        this['pod_name'] = podName;
        return this;
    }
    public set podName(podName: string  | undefined) {
        this['pod_name'] = podName;
    }
    public get podName(): string | undefined {
        return this['pod_name'];
    }
    public withImageName(imageName: string): ExportContainerListRequestBody {
        this['image_name'] = imageName;
        return this;
    }
    public set imageName(imageName: string  | undefined) {
        this['image_name'] = imageName;
    }
    public get imageName(): string | undefined {
        return this['image_name'];
    }
    public withStatus(status: string): ExportContainerListRequestBody {
        this['status'] = status;
        return this;
    }
    public withRisky(risky: boolean): ExportContainerListRequestBody {
        this['risky'] = risky;
        return this;
    }
    public withCreateTime(createTime: ExportContainerListRequestBodyCreateTime): ExportContainerListRequestBody {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: ExportContainerListRequestBodyCreateTime  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): ExportContainerListRequestBodyCreateTime | undefined {
        return this['create_time'];
    }
    public withCpuLimit(cpuLimit: string): ExportContainerListRequestBody {
        this['cpu_limit'] = cpuLimit;
        return this;
    }
    public set cpuLimit(cpuLimit: string  | undefined) {
        this['cpu_limit'] = cpuLimit;
    }
    public get cpuLimit(): string | undefined {
        return this['cpu_limit'];
    }
    public withMemoryLimit(memoryLimit: string): ExportContainerListRequestBody {
        this['memory_limit'] = memoryLimit;
        return this;
    }
    public set memoryLimit(memoryLimit: string  | undefined) {
        this['memory_limit'] = memoryLimit;
    }
    public get memoryLimit(): string | undefined {
        return this['memory_limit'];
    }
    public withExportHeaders(exportHeaders: Array<Array<string>>): ExportContainerListRequestBody {
        this['export_headers'] = exportHeaders;
        return this;
    }
    public set exportHeaders(exportHeaders: Array<Array<string>>  | undefined) {
        this['export_headers'] = exportHeaders;
    }
    public get exportHeaders(): Array<Array<string>> | undefined {
        return this['export_headers'];
    }
}