

export class ContainerMountInfo {
    private 'host_path'?: string;
    private 'mount_path'?: string;
    private 'mount_propagation'?: string;
    private 'read_only'?: boolean;
    private 'mount_name'?: string;
    private 'sub_path'?: string;
    private 'sub_path_expr'?: string;
    public constructor() { 
    }
    public withHostPath(hostPath: string): ContainerMountInfo {
        this['host_path'] = hostPath;
        return this;
    }
    public set hostPath(hostPath: string  | undefined) {
        this['host_path'] = hostPath;
    }
    public get hostPath(): string | undefined {
        return this['host_path'];
    }
    public withMountPath(mountPath: string): ContainerMountInfo {
        this['mount_path'] = mountPath;
        return this;
    }
    public set mountPath(mountPath: string  | undefined) {
        this['mount_path'] = mountPath;
    }
    public get mountPath(): string | undefined {
        return this['mount_path'];
    }
    public withMountPropagation(mountPropagation: string): ContainerMountInfo {
        this['mount_propagation'] = mountPropagation;
        return this;
    }
    public set mountPropagation(mountPropagation: string  | undefined) {
        this['mount_propagation'] = mountPropagation;
    }
    public get mountPropagation(): string | undefined {
        return this['mount_propagation'];
    }
    public withReadOnly(readOnly: boolean): ContainerMountInfo {
        this['read_only'] = readOnly;
        return this;
    }
    public set readOnly(readOnly: boolean  | undefined) {
        this['read_only'] = readOnly;
    }
    public get readOnly(): boolean | undefined {
        return this['read_only'];
    }
    public withMountName(mountName: string): ContainerMountInfo {
        this['mount_name'] = mountName;
        return this;
    }
    public set mountName(mountName: string  | undefined) {
        this['mount_name'] = mountName;
    }
    public get mountName(): string | undefined {
        return this['mount_name'];
    }
    public withSubPath(subPath: string): ContainerMountInfo {
        this['sub_path'] = subPath;
        return this;
    }
    public set subPath(subPath: string  | undefined) {
        this['sub_path'] = subPath;
    }
    public get subPath(): string | undefined {
        return this['sub_path'];
    }
    public withSubPathExpr(subPathExpr: string): ContainerMountInfo {
        this['sub_path_expr'] = subPathExpr;
        return this;
    }
    public set subPathExpr(subPathExpr: string  | undefined) {
        this['sub_path_expr'] = subPathExpr;
    }
    public get subPathExpr(): string | undefined {
        return this['sub_path_expr'];
    }
}