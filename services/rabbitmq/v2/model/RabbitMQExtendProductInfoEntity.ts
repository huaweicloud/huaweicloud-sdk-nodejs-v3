import { RabbitMQExtendProductIosEntity } from './RabbitMQExtendProductIosEntity';
import { RabbitMQExtendProductPropertiesEntity } from './RabbitMQExtendProductPropertiesEntity';
import { RabbitMQProductSupportFeaturesEntity } from './RabbitMQProductSupportFeaturesEntity';


export class RabbitMQExtendProductInfoEntity {
    public type?: string;
    private 'product_id'?: string | undefined;
    private 'ecs_flavor_id'?: string | undefined;
    private 'arch_types'?: Array<string> | undefined;
    private 'charging_mode'?: Array<string> | undefined;
    public ios?: Array<RabbitMQExtendProductIosEntity>;
    public properties?: RabbitMQExtendProductPropertiesEntity;
    private 'available_zones'?: Array<string> | undefined;
    private 'unavailable_zones'?: Array<string> | undefined;
    private 'support_features'?: Array<RabbitMQProductSupportFeaturesEntity> | undefined;
    public constructor() { 
    }
    public withType(type: string): RabbitMQExtendProductInfoEntity {
        this['type'] = type;
        return this;
    }
    public withProductId(productId: string): RabbitMQExtendProductInfoEntity {
        this['product_id'] = productId;
        return this;
    }
    public set productId(productId: string | undefined) {
        this['product_id'] = productId;
    }
    public get productId() {
        return this['product_id'];
    }
    public withEcsFlavorId(ecsFlavorId: string): RabbitMQExtendProductInfoEntity {
        this['ecs_flavor_id'] = ecsFlavorId;
        return this;
    }
    public set ecsFlavorId(ecsFlavorId: string | undefined) {
        this['ecs_flavor_id'] = ecsFlavorId;
    }
    public get ecsFlavorId() {
        return this['ecs_flavor_id'];
    }
    public withArchTypes(archTypes: Array<string>): RabbitMQExtendProductInfoEntity {
        this['arch_types'] = archTypes;
        return this;
    }
    public set archTypes(archTypes: Array<string> | undefined) {
        this['arch_types'] = archTypes;
    }
    public get archTypes() {
        return this['arch_types'];
    }
    public withChargingMode(chargingMode: Array<string>): RabbitMQExtendProductInfoEntity {
        this['charging_mode'] = chargingMode;
        return this;
    }
    public set chargingMode(chargingMode: Array<string> | undefined) {
        this['charging_mode'] = chargingMode;
    }
    public get chargingMode() {
        return this['charging_mode'];
    }
    public withIos(ios: Array<RabbitMQExtendProductIosEntity>): RabbitMQExtendProductInfoEntity {
        this['ios'] = ios;
        return this;
    }
    public withProperties(properties: RabbitMQExtendProductPropertiesEntity): RabbitMQExtendProductInfoEntity {
        this['properties'] = properties;
        return this;
    }
    public withAvailableZones(availableZones: Array<string>): RabbitMQExtendProductInfoEntity {
        this['available_zones'] = availableZones;
        return this;
    }
    public set availableZones(availableZones: Array<string> | undefined) {
        this['available_zones'] = availableZones;
    }
    public get availableZones() {
        return this['available_zones'];
    }
    public withUnavailableZones(unavailableZones: Array<string>): RabbitMQExtendProductInfoEntity {
        this['unavailable_zones'] = unavailableZones;
        return this;
    }
    public set unavailableZones(unavailableZones: Array<string> | undefined) {
        this['unavailable_zones'] = unavailableZones;
    }
    public get unavailableZones() {
        return this['unavailable_zones'];
    }
    public withSupportFeatures(supportFeatures: Array<RabbitMQProductSupportFeaturesEntity>): RabbitMQExtendProductInfoEntity {
        this['support_features'] = supportFeatures;
        return this;
    }
    public set supportFeatures(supportFeatures: Array<RabbitMQProductSupportFeaturesEntity> | undefined) {
        this['support_features'] = supportFeatures;
    }
    public get supportFeatures() {
        return this['support_features'];
    }
}