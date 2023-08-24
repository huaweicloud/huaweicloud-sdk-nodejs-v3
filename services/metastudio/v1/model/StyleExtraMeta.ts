import { StyleExtraMetaEditColorItems } from './StyleExtraMetaEditColorItems';
import { StyleExtraMetaEditComponents } from './StyleExtraMetaEditComponents';
import { StyleExtraMetaEditValueItems } from './StyleExtraMetaEditValueItems';
import { StyleExtraMetaModellingAlgorithm } from './StyleExtraMetaModellingAlgorithm';


export class StyleExtraMeta {
    private 'picture_modeling_enable'?: boolean;
    private 'edit_enable'?: boolean;
    private 'edit_engine'?: string;
    private 'model_id'?: string;
    private 'edit_value_items'?: { [key: string]: StyleExtraMetaEditValueItems; };
    private 'edit_color_items'?: { [key: string]: StyleExtraMetaEditColorItems; };
    private 'edit_components'?: { [key: string]: StyleExtraMetaEditComponents; };
    private 'modelling_algorithm'?: { [key: string]: StyleExtraMetaModellingAlgorithm; };
    public constructor() { 
    }
    public withPictureModelingEnable(pictureModelingEnable: boolean): StyleExtraMeta {
        this['picture_modeling_enable'] = pictureModelingEnable;
        return this;
    }
    public set pictureModelingEnable(pictureModelingEnable: boolean  | undefined) {
        this['picture_modeling_enable'] = pictureModelingEnable;
    }
    public get pictureModelingEnable(): boolean | undefined {
        return this['picture_modeling_enable'];
    }
    public withEditEnable(editEnable: boolean): StyleExtraMeta {
        this['edit_enable'] = editEnable;
        return this;
    }
    public set editEnable(editEnable: boolean  | undefined) {
        this['edit_enable'] = editEnable;
    }
    public get editEnable(): boolean | undefined {
        return this['edit_enable'];
    }
    public withEditEngine(editEngine: string): StyleExtraMeta {
        this['edit_engine'] = editEngine;
        return this;
    }
    public set editEngine(editEngine: string  | undefined) {
        this['edit_engine'] = editEngine;
    }
    public get editEngine(): string | undefined {
        return this['edit_engine'];
    }
    public withModelId(modelId: string): StyleExtraMeta {
        this['model_id'] = modelId;
        return this;
    }
    public set modelId(modelId: string  | undefined) {
        this['model_id'] = modelId;
    }
    public get modelId(): string | undefined {
        return this['model_id'];
    }
    public withEditValueItems(editValueItems: { [key: string]: StyleExtraMetaEditValueItems; }): StyleExtraMeta {
        this['edit_value_items'] = editValueItems;
        return this;
    }
    public set editValueItems(editValueItems: { [key: string]: StyleExtraMetaEditValueItems; }  | undefined) {
        this['edit_value_items'] = editValueItems;
    }
    public get editValueItems(): { [key: string]: StyleExtraMetaEditValueItems; } | undefined {
        return this['edit_value_items'];
    }
    public withEditColorItems(editColorItems: { [key: string]: StyleExtraMetaEditColorItems; }): StyleExtraMeta {
        this['edit_color_items'] = editColorItems;
        return this;
    }
    public set editColorItems(editColorItems: { [key: string]: StyleExtraMetaEditColorItems; }  | undefined) {
        this['edit_color_items'] = editColorItems;
    }
    public get editColorItems(): { [key: string]: StyleExtraMetaEditColorItems; } | undefined {
        return this['edit_color_items'];
    }
    public withEditComponents(editComponents: { [key: string]: StyleExtraMetaEditComponents; }): StyleExtraMeta {
        this['edit_components'] = editComponents;
        return this;
    }
    public set editComponents(editComponents: { [key: string]: StyleExtraMetaEditComponents; }  | undefined) {
        this['edit_components'] = editComponents;
    }
    public get editComponents(): { [key: string]: StyleExtraMetaEditComponents; } | undefined {
        return this['edit_components'];
    }
    public withModellingAlgorithm(modellingAlgorithm: { [key: string]: StyleExtraMetaModellingAlgorithm; }): StyleExtraMeta {
        this['modelling_algorithm'] = modellingAlgorithm;
        return this;
    }
    public set modellingAlgorithm(modellingAlgorithm: { [key: string]: StyleExtraMetaModellingAlgorithm; }  | undefined) {
        this['modelling_algorithm'] = modellingAlgorithm;
    }
    public get modellingAlgorithm(): { [key: string]: StyleExtraMetaModellingAlgorithm; } | undefined {
        return this['modelling_algorithm'];
    }
}