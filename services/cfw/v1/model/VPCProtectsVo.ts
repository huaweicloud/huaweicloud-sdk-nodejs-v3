import { VpcAttachmentDetail } from './VpcAttachmentDetail';


export class VPCProtectsVo {
    public total?: number;
    private 'self_total'?: number;
    private 'other_total'?: number;
    private 'protect_vpcs'?: Array<VpcAttachmentDetail>;
    private 'self_protect_vpcs'?: Array<VpcAttachmentDetail>;
    private 'other_protect_vpcs'?: Array<VpcAttachmentDetail>;
    private 'total_assets'?: number;
    public constructor() { 
    }
    public withTotal(total: number): VPCProtectsVo {
        this['total'] = total;
        return this;
    }
    public withSelfTotal(selfTotal: number): VPCProtectsVo {
        this['self_total'] = selfTotal;
        return this;
    }
    public set selfTotal(selfTotal: number  | undefined) {
        this['self_total'] = selfTotal;
    }
    public get selfTotal(): number | undefined {
        return this['self_total'];
    }
    public withOtherTotal(otherTotal: number): VPCProtectsVo {
        this['other_total'] = otherTotal;
        return this;
    }
    public set otherTotal(otherTotal: number  | undefined) {
        this['other_total'] = otherTotal;
    }
    public get otherTotal(): number | undefined {
        return this['other_total'];
    }
    public withProtectVpcs(protectVpcs: Array<VpcAttachmentDetail>): VPCProtectsVo {
        this['protect_vpcs'] = protectVpcs;
        return this;
    }
    public set protectVpcs(protectVpcs: Array<VpcAttachmentDetail>  | undefined) {
        this['protect_vpcs'] = protectVpcs;
    }
    public get protectVpcs(): Array<VpcAttachmentDetail> | undefined {
        return this['protect_vpcs'];
    }
    public withSelfProtectVpcs(selfProtectVpcs: Array<VpcAttachmentDetail>): VPCProtectsVo {
        this['self_protect_vpcs'] = selfProtectVpcs;
        return this;
    }
    public set selfProtectVpcs(selfProtectVpcs: Array<VpcAttachmentDetail>  | undefined) {
        this['self_protect_vpcs'] = selfProtectVpcs;
    }
    public get selfProtectVpcs(): Array<VpcAttachmentDetail> | undefined {
        return this['self_protect_vpcs'];
    }
    public withOtherProtectVpcs(otherProtectVpcs: Array<VpcAttachmentDetail>): VPCProtectsVo {
        this['other_protect_vpcs'] = otherProtectVpcs;
        return this;
    }
    public set otherProtectVpcs(otherProtectVpcs: Array<VpcAttachmentDetail>  | undefined) {
        this['other_protect_vpcs'] = otherProtectVpcs;
    }
    public get otherProtectVpcs(): Array<VpcAttachmentDetail> | undefined {
        return this['other_protect_vpcs'];
    }
    public withTotalAssets(totalAssets: number): VPCProtectsVo {
        this['total_assets'] = totalAssets;
        return this;
    }
    public set totalAssets(totalAssets: number  | undefined) {
        this['total_assets'] = totalAssets;
    }
    public get totalAssets(): number | undefined {
        return this['total_assets'];
    }
}