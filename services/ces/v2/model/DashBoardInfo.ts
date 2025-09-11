import { DashBoardIdItemResp } from './DashBoardIdItemResp';
import { DashBoardNameItemResp } from './DashBoardNameItemResp';
import { EnterpriseIdItemResp } from './EnterpriseIdItemResp';
import { IsFavoriteItem } from './IsFavoriteItem';
import { WidgetDisplayMode } from './WidgetDisplayMode';


export class DashBoardInfo {
    private 'dashboard_id'?: string;
    private 'dashboard_name'?: string;
    private 'enterprise_id'?: string;
    private 'row_widget_num'?: number;
    private 'is_favorite'?: boolean;
    private 'creator_name'?: string;
    private 'create_time'?: number;
    private 'widgets_num'?: number;
    public namespace?: string;
    private 'sub_product'?: string;
    private 'dashboard_template_id'?: string;
    public constructor() { 
    }
    public withDashboardId(dashboardId: string): DashBoardInfo {
        this['dashboard_id'] = dashboardId;
        return this;
    }
    public set dashboardId(dashboardId: string  | undefined) {
        this['dashboard_id'] = dashboardId;
    }
    public get dashboardId(): string | undefined {
        return this['dashboard_id'];
    }
    public withDashboardName(dashboardName: string): DashBoardInfo {
        this['dashboard_name'] = dashboardName;
        return this;
    }
    public set dashboardName(dashboardName: string  | undefined) {
        this['dashboard_name'] = dashboardName;
    }
    public get dashboardName(): string | undefined {
        return this['dashboard_name'];
    }
    public withEnterpriseId(enterpriseId: string): DashBoardInfo {
        this['enterprise_id'] = enterpriseId;
        return this;
    }
    public set enterpriseId(enterpriseId: string  | undefined) {
        this['enterprise_id'] = enterpriseId;
    }
    public get enterpriseId(): string | undefined {
        return this['enterprise_id'];
    }
    public withRowWidgetNum(rowWidgetNum: number): DashBoardInfo {
        this['row_widget_num'] = rowWidgetNum;
        return this;
    }
    public set rowWidgetNum(rowWidgetNum: number  | undefined) {
        this['row_widget_num'] = rowWidgetNum;
    }
    public get rowWidgetNum(): number | undefined {
        return this['row_widget_num'];
    }
    public withIsFavorite(isFavorite: boolean): DashBoardInfo {
        this['is_favorite'] = isFavorite;
        return this;
    }
    public set isFavorite(isFavorite: boolean  | undefined) {
        this['is_favorite'] = isFavorite;
    }
    public get isFavorite(): boolean | undefined {
        return this['is_favorite'];
    }
    public withCreatorName(creatorName: string): DashBoardInfo {
        this['creator_name'] = creatorName;
        return this;
    }
    public set creatorName(creatorName: string  | undefined) {
        this['creator_name'] = creatorName;
    }
    public get creatorName(): string | undefined {
        return this['creator_name'];
    }
    public withCreateTime(createTime: number): DashBoardInfo {
        this['create_time'] = createTime;
        return this;
    }
    public set createTime(createTime: number  | undefined) {
        this['create_time'] = createTime;
    }
    public get createTime(): number | undefined {
        return this['create_time'];
    }
    public withWidgetsNum(widgetsNum: number): DashBoardInfo {
        this['widgets_num'] = widgetsNum;
        return this;
    }
    public set widgetsNum(widgetsNum: number  | undefined) {
        this['widgets_num'] = widgetsNum;
    }
    public get widgetsNum(): number | undefined {
        return this['widgets_num'];
    }
    public withNamespace(namespace: string): DashBoardInfo {
        this['namespace'] = namespace;
        return this;
    }
    public withSubProduct(subProduct: string): DashBoardInfo {
        this['sub_product'] = subProduct;
        return this;
    }
    public set subProduct(subProduct: string  | undefined) {
        this['sub_product'] = subProduct;
    }
    public get subProduct(): string | undefined {
        return this['sub_product'];
    }
    public withDashboardTemplateId(dashboardTemplateId: string): DashBoardInfo {
        this['dashboard_template_id'] = dashboardTemplateId;
        return this;
    }
    public set dashboardTemplateId(dashboardTemplateId: string  | undefined) {
        this['dashboard_template_id'] = dashboardTemplateId;
    }
    public get dashboardTemplateId(): string | undefined {
        return this['dashboard_template_id'];
    }
}