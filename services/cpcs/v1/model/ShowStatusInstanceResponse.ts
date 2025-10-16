import { ShowStatusInstanceItem } from './ShowStatusInstanceItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowStatusInstanceResponse extends SdkResponse {
    private 'cpu_utils'?: Array<ShowStatusInstanceItem>;
    private 'mem_utils'?: Array<ShowStatusInstanceItem>;
    private 'disk_utils'?: Array<ShowStatusInstanceItem>;
    private 'cpu_util_instance_names'?: Array<string>;
    private 'mem_util_instance_names'?: Array<string>;
    private 'disk_util_instance_names'?: Array<string>;
    private 'cpu_util_averages'?: Array<number>;
    private 'mem_util_averages'?: Array<number>;
    private 'disk_util_averages'?: Array<number>;
    public constructor() { 
        super();
    }
    public withCpuUtils(cpuUtils: Array<ShowStatusInstanceItem>): ShowStatusInstanceResponse {
        this['cpu_utils'] = cpuUtils;
        return this;
    }
    public set cpuUtils(cpuUtils: Array<ShowStatusInstanceItem>  | undefined) {
        this['cpu_utils'] = cpuUtils;
    }
    public get cpuUtils(): Array<ShowStatusInstanceItem> | undefined {
        return this['cpu_utils'];
    }
    public withMemUtils(memUtils: Array<ShowStatusInstanceItem>): ShowStatusInstanceResponse {
        this['mem_utils'] = memUtils;
        return this;
    }
    public set memUtils(memUtils: Array<ShowStatusInstanceItem>  | undefined) {
        this['mem_utils'] = memUtils;
    }
    public get memUtils(): Array<ShowStatusInstanceItem> | undefined {
        return this['mem_utils'];
    }
    public withDiskUtils(diskUtils: Array<ShowStatusInstanceItem>): ShowStatusInstanceResponse {
        this['disk_utils'] = diskUtils;
        return this;
    }
    public set diskUtils(diskUtils: Array<ShowStatusInstanceItem>  | undefined) {
        this['disk_utils'] = diskUtils;
    }
    public get diskUtils(): Array<ShowStatusInstanceItem> | undefined {
        return this['disk_utils'];
    }
    public withCpuUtilInstanceNames(cpuUtilInstanceNames: Array<string>): ShowStatusInstanceResponse {
        this['cpu_util_instance_names'] = cpuUtilInstanceNames;
        return this;
    }
    public set cpuUtilInstanceNames(cpuUtilInstanceNames: Array<string>  | undefined) {
        this['cpu_util_instance_names'] = cpuUtilInstanceNames;
    }
    public get cpuUtilInstanceNames(): Array<string> | undefined {
        return this['cpu_util_instance_names'];
    }
    public withMemUtilInstanceNames(memUtilInstanceNames: Array<string>): ShowStatusInstanceResponse {
        this['mem_util_instance_names'] = memUtilInstanceNames;
        return this;
    }
    public set memUtilInstanceNames(memUtilInstanceNames: Array<string>  | undefined) {
        this['mem_util_instance_names'] = memUtilInstanceNames;
    }
    public get memUtilInstanceNames(): Array<string> | undefined {
        return this['mem_util_instance_names'];
    }
    public withDiskUtilInstanceNames(diskUtilInstanceNames: Array<string>): ShowStatusInstanceResponse {
        this['disk_util_instance_names'] = diskUtilInstanceNames;
        return this;
    }
    public set diskUtilInstanceNames(diskUtilInstanceNames: Array<string>  | undefined) {
        this['disk_util_instance_names'] = diskUtilInstanceNames;
    }
    public get diskUtilInstanceNames(): Array<string> | undefined {
        return this['disk_util_instance_names'];
    }
    public withCpuUtilAverages(cpuUtilAverages: Array<number>): ShowStatusInstanceResponse {
        this['cpu_util_averages'] = cpuUtilAverages;
        return this;
    }
    public set cpuUtilAverages(cpuUtilAverages: Array<number>  | undefined) {
        this['cpu_util_averages'] = cpuUtilAverages;
    }
    public get cpuUtilAverages(): Array<number> | undefined {
        return this['cpu_util_averages'];
    }
    public withMemUtilAverages(memUtilAverages: Array<number>): ShowStatusInstanceResponse {
        this['mem_util_averages'] = memUtilAverages;
        return this;
    }
    public set memUtilAverages(memUtilAverages: Array<number>  | undefined) {
        this['mem_util_averages'] = memUtilAverages;
    }
    public get memUtilAverages(): Array<number> | undefined {
        return this['mem_util_averages'];
    }
    public withDiskUtilAverages(diskUtilAverages: Array<number>): ShowStatusInstanceResponse {
        this['disk_util_averages'] = diskUtilAverages;
        return this;
    }
    public set diskUtilAverages(diskUtilAverages: Array<number>  | undefined) {
        this['disk_util_averages'] = diskUtilAverages;
    }
    public get diskUtilAverages(): Array<number> | undefined {
        return this['disk_util_averages'];
    }
}