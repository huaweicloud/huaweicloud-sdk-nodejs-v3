
import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListImageScanOverviewResponse extends SdkResponse {
    private 'total_image_num'?: number;
    private 'risky_image_num'?: number;
    private 'vuls_num'?: number;
    private 'risky_config_num'?: number;
    private 'malwares_num'?: number;
    private 'unscanned_num'?: number;
    private 'scanning_task_num'?: number;
    private 'finished_task_num'?: number;
    private 'latest_scan_time'?: number;
    private 'local_scanning_task_num'?: number;
    private 'local_finished_task_num'?: number;
    public constructor() { 
        super();
    }
    public withTotalImageNum(totalImageNum: number): ListImageScanOverviewResponse {
        this['total_image_num'] = totalImageNum;
        return this;
    }
    public set totalImageNum(totalImageNum: number  | undefined) {
        this['total_image_num'] = totalImageNum;
    }
    public get totalImageNum(): number | undefined {
        return this['total_image_num'];
    }
    public withRiskyImageNum(riskyImageNum: number): ListImageScanOverviewResponse {
        this['risky_image_num'] = riskyImageNum;
        return this;
    }
    public set riskyImageNum(riskyImageNum: number  | undefined) {
        this['risky_image_num'] = riskyImageNum;
    }
    public get riskyImageNum(): number | undefined {
        return this['risky_image_num'];
    }
    public withVulsNum(vulsNum: number): ListImageScanOverviewResponse {
        this['vuls_num'] = vulsNum;
        return this;
    }
    public set vulsNum(vulsNum: number  | undefined) {
        this['vuls_num'] = vulsNum;
    }
    public get vulsNum(): number | undefined {
        return this['vuls_num'];
    }
    public withRiskyConfigNum(riskyConfigNum: number): ListImageScanOverviewResponse {
        this['risky_config_num'] = riskyConfigNum;
        return this;
    }
    public set riskyConfigNum(riskyConfigNum: number  | undefined) {
        this['risky_config_num'] = riskyConfigNum;
    }
    public get riskyConfigNum(): number | undefined {
        return this['risky_config_num'];
    }
    public withMalwaresNum(malwaresNum: number): ListImageScanOverviewResponse {
        this['malwares_num'] = malwaresNum;
        return this;
    }
    public set malwaresNum(malwaresNum: number  | undefined) {
        this['malwares_num'] = malwaresNum;
    }
    public get malwaresNum(): number | undefined {
        return this['malwares_num'];
    }
    public withUnscannedNum(unscannedNum: number): ListImageScanOverviewResponse {
        this['unscanned_num'] = unscannedNum;
        return this;
    }
    public set unscannedNum(unscannedNum: number  | undefined) {
        this['unscanned_num'] = unscannedNum;
    }
    public get unscannedNum(): number | undefined {
        return this['unscanned_num'];
    }
    public withScanningTaskNum(scanningTaskNum: number): ListImageScanOverviewResponse {
        this['scanning_task_num'] = scanningTaskNum;
        return this;
    }
    public set scanningTaskNum(scanningTaskNum: number  | undefined) {
        this['scanning_task_num'] = scanningTaskNum;
    }
    public get scanningTaskNum(): number | undefined {
        return this['scanning_task_num'];
    }
    public withFinishedTaskNum(finishedTaskNum: number): ListImageScanOverviewResponse {
        this['finished_task_num'] = finishedTaskNum;
        return this;
    }
    public set finishedTaskNum(finishedTaskNum: number  | undefined) {
        this['finished_task_num'] = finishedTaskNum;
    }
    public get finishedTaskNum(): number | undefined {
        return this['finished_task_num'];
    }
    public withLatestScanTime(latestScanTime: number): ListImageScanOverviewResponse {
        this['latest_scan_time'] = latestScanTime;
        return this;
    }
    public set latestScanTime(latestScanTime: number  | undefined) {
        this['latest_scan_time'] = latestScanTime;
    }
    public get latestScanTime(): number | undefined {
        return this['latest_scan_time'];
    }
    public withLocalScanningTaskNum(localScanningTaskNum: number): ListImageScanOverviewResponse {
        this['local_scanning_task_num'] = localScanningTaskNum;
        return this;
    }
    public set localScanningTaskNum(localScanningTaskNum: number  | undefined) {
        this['local_scanning_task_num'] = localScanningTaskNum;
    }
    public get localScanningTaskNum(): number | undefined {
        return this['local_scanning_task_num'];
    }
    public withLocalFinishedTaskNum(localFinishedTaskNum: number): ListImageScanOverviewResponse {
        this['local_finished_task_num'] = localFinishedTaskNum;
        return this;
    }
    public set localFinishedTaskNum(localFinishedTaskNum: number  | undefined) {
        this['local_finished_task_num'] = localFinishedTaskNum;
    }
    public get localFinishedTaskNum(): number | undefined {
        return this['local_finished_task_num'];
    }
}