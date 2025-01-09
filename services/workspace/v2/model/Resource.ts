import { AddVolumes } from './AddVolumes';
import { ApplyDesktopsInternet } from './ApplyDesktopsInternet';
import { ApplySubnetBandwidthReq } from './ApplySubnetBandwidthReq';
import { AttachInstancesReq } from './AttachInstancesReq';
import { CreateDesktopPoolReq } from './CreateDesktopPoolReq';
import { CreateDesktopReq } from './CreateDesktopReq';
import { CreateExclusiveHostsReq } from './CreateExclusiveHostsReq';
import { ExpandDesktopPoolOrderReq } from './ExpandDesktopPoolOrderReq';
import { Hosts } from './Hosts';
import { RebuildDesktopsReq } from './RebuildDesktopsReq';
import { ResizeExclusiveLitesReq } from './ResizeExclusiveLitesReq';
import { SubscribeUserSharerReq } from './SubscribeUserSharerReq';


export class Resource {
    private 'period_type'?: number;
    private 'period_num'?: number;
    private 'is_auto_renew'?: number;
    private 'add_volumes'?: AddVolumes;
    private 'create_desktops'?: CreateDesktopReq;
    private 'deh_hosts'?: Hosts;
    private 'rebuild_desktops'?: RebuildDesktopsReq;
    private 'attach_desktops'?: AttachInstancesReq;
    private 'create_exclusive_hosts'?: CreateExclusiveHostsReq;
    private 'resize_exclusive_lites'?: ResizeExclusiveLitesReq;
    private 'create_desktop_pool'?: CreateDesktopPoolReq;
    private 'expand_desktop_pool'?: ExpandDesktopPoolOrderReq;
    private 'apply_desktops_internet'?: ApplyDesktopsInternet;
    private 'apply_subnet_bandwidth'?: ApplySubnetBandwidthReq;
    private 'subscribe_user_sharer'?: SubscribeUserSharerReq;
    private 'cloud_service_console_url'?: string;
    public constructor() { 
    }
    public withPeriodType(periodType: number): Resource {
        this['period_type'] = periodType;
        return this;
    }
    public set periodType(periodType: number  | undefined) {
        this['period_type'] = periodType;
    }
    public get periodType(): number | undefined {
        return this['period_type'];
    }
    public withPeriodNum(periodNum: number): Resource {
        this['period_num'] = periodNum;
        return this;
    }
    public set periodNum(periodNum: number  | undefined) {
        this['period_num'] = periodNum;
    }
    public get periodNum(): number | undefined {
        return this['period_num'];
    }
    public withIsAutoRenew(isAutoRenew: number): Resource {
        this['is_auto_renew'] = isAutoRenew;
        return this;
    }
    public set isAutoRenew(isAutoRenew: number  | undefined) {
        this['is_auto_renew'] = isAutoRenew;
    }
    public get isAutoRenew(): number | undefined {
        return this['is_auto_renew'];
    }
    public withAddVolumes(addVolumes: AddVolumes): Resource {
        this['add_volumes'] = addVolumes;
        return this;
    }
    public set addVolumes(addVolumes: AddVolumes  | undefined) {
        this['add_volumes'] = addVolumes;
    }
    public get addVolumes(): AddVolumes | undefined {
        return this['add_volumes'];
    }
    public withCreateDesktops(createDesktops: CreateDesktopReq): Resource {
        this['create_desktops'] = createDesktops;
        return this;
    }
    public set createDesktops(createDesktops: CreateDesktopReq  | undefined) {
        this['create_desktops'] = createDesktops;
    }
    public get createDesktops(): CreateDesktopReq | undefined {
        return this['create_desktops'];
    }
    public withDehHosts(dehHosts: Hosts): Resource {
        this['deh_hosts'] = dehHosts;
        return this;
    }
    public set dehHosts(dehHosts: Hosts  | undefined) {
        this['deh_hosts'] = dehHosts;
    }
    public get dehHosts(): Hosts | undefined {
        return this['deh_hosts'];
    }
    public withRebuildDesktops(rebuildDesktops: RebuildDesktopsReq): Resource {
        this['rebuild_desktops'] = rebuildDesktops;
        return this;
    }
    public set rebuildDesktops(rebuildDesktops: RebuildDesktopsReq  | undefined) {
        this['rebuild_desktops'] = rebuildDesktops;
    }
    public get rebuildDesktops(): RebuildDesktopsReq | undefined {
        return this['rebuild_desktops'];
    }
    public withAttachDesktops(attachDesktops: AttachInstancesReq): Resource {
        this['attach_desktops'] = attachDesktops;
        return this;
    }
    public set attachDesktops(attachDesktops: AttachInstancesReq  | undefined) {
        this['attach_desktops'] = attachDesktops;
    }
    public get attachDesktops(): AttachInstancesReq | undefined {
        return this['attach_desktops'];
    }
    public withCreateExclusiveHosts(createExclusiveHosts: CreateExclusiveHostsReq): Resource {
        this['create_exclusive_hosts'] = createExclusiveHosts;
        return this;
    }
    public set createExclusiveHosts(createExclusiveHosts: CreateExclusiveHostsReq  | undefined) {
        this['create_exclusive_hosts'] = createExclusiveHosts;
    }
    public get createExclusiveHosts(): CreateExclusiveHostsReq | undefined {
        return this['create_exclusive_hosts'];
    }
    public withResizeExclusiveLites(resizeExclusiveLites: ResizeExclusiveLitesReq): Resource {
        this['resize_exclusive_lites'] = resizeExclusiveLites;
        return this;
    }
    public set resizeExclusiveLites(resizeExclusiveLites: ResizeExclusiveLitesReq  | undefined) {
        this['resize_exclusive_lites'] = resizeExclusiveLites;
    }
    public get resizeExclusiveLites(): ResizeExclusiveLitesReq | undefined {
        return this['resize_exclusive_lites'];
    }
    public withCreateDesktopPool(createDesktopPool: CreateDesktopPoolReq): Resource {
        this['create_desktop_pool'] = createDesktopPool;
        return this;
    }
    public set createDesktopPool(createDesktopPool: CreateDesktopPoolReq  | undefined) {
        this['create_desktop_pool'] = createDesktopPool;
    }
    public get createDesktopPool(): CreateDesktopPoolReq | undefined {
        return this['create_desktop_pool'];
    }
    public withExpandDesktopPool(expandDesktopPool: ExpandDesktopPoolOrderReq): Resource {
        this['expand_desktop_pool'] = expandDesktopPool;
        return this;
    }
    public set expandDesktopPool(expandDesktopPool: ExpandDesktopPoolOrderReq  | undefined) {
        this['expand_desktop_pool'] = expandDesktopPool;
    }
    public get expandDesktopPool(): ExpandDesktopPoolOrderReq | undefined {
        return this['expand_desktop_pool'];
    }
    public withApplyDesktopsInternet(applyDesktopsInternet: ApplyDesktopsInternet): Resource {
        this['apply_desktops_internet'] = applyDesktopsInternet;
        return this;
    }
    public set applyDesktopsInternet(applyDesktopsInternet: ApplyDesktopsInternet  | undefined) {
        this['apply_desktops_internet'] = applyDesktopsInternet;
    }
    public get applyDesktopsInternet(): ApplyDesktopsInternet | undefined {
        return this['apply_desktops_internet'];
    }
    public withApplySubnetBandwidth(applySubnetBandwidth: ApplySubnetBandwidthReq): Resource {
        this['apply_subnet_bandwidth'] = applySubnetBandwidth;
        return this;
    }
    public set applySubnetBandwidth(applySubnetBandwidth: ApplySubnetBandwidthReq  | undefined) {
        this['apply_subnet_bandwidth'] = applySubnetBandwidth;
    }
    public get applySubnetBandwidth(): ApplySubnetBandwidthReq | undefined {
        return this['apply_subnet_bandwidth'];
    }
    public withSubscribeUserSharer(subscribeUserSharer: SubscribeUserSharerReq): Resource {
        this['subscribe_user_sharer'] = subscribeUserSharer;
        return this;
    }
    public set subscribeUserSharer(subscribeUserSharer: SubscribeUserSharerReq  | undefined) {
        this['subscribe_user_sharer'] = subscribeUserSharer;
    }
    public get subscribeUserSharer(): SubscribeUserSharerReq | undefined {
        return this['subscribe_user_sharer'];
    }
    public withCloudServiceConsoleUrl(cloudServiceConsoleUrl: string): Resource {
        this['cloud_service_console_url'] = cloudServiceConsoleUrl;
        return this;
    }
    public set cloudServiceConsoleUrl(cloudServiceConsoleUrl: string  | undefined) {
        this['cloud_service_console_url'] = cloudServiceConsoleUrl;
    }
    public get cloudServiceConsoleUrl(): string | undefined {
        return this['cloud_service_console_url'];
    }
}