var trans_table = {
    'Filters': 'フィルター',
    'Itemlevel': 'アイテムレベル',
    'Level req': '要求レベル',
    'Name': '名前',
    'Slots': '装備',
    'Armor': '防具',
    'Head': '頭',
    'Shoulders': '肩',
    'Chest': '胴',
    'Hands': '腕',
    'Legs': '脚',
    'Feet': 'ブーツ',
    'Weapons': '武器',
    'Guns': '銃',
    'Pistols': '拳銃',
    'Rifles': 'ライフル',
    'Axes': '斧',
    'Maces': 'メイス',
    'Swords': '剣',
    'Two Handers': '両手持ち',
    'Shields': '盾',
    'Focus': '詠唱者用オフハンド',
    'Daggers': 'ダガー',
    'Scepters': 'セプター',
    'Jewelry': '装飾品',
    'Amulets': 'アミュレット',
    'Medals': 'メダル',
    'Rings': 'リング',
    'Waist': 'ベルト',
    'Misc': 'その他',
    'Consumables': '消耗品',
    'Materia': 'コンポーネント',
    'Quest': '素材',
    'Relics': 'レリック',
    'Augments': '増強剤',
    'Blueprints': '設計図',
    'Faction': '勢力',
    'Other': 'その他',
    'Random': 'ランダム',
    'Rarity': 'レア度',
    'Common': 'コモン',
    'Rare': 'レア',
    'Epic': 'エピック',
    'Legendary': 'レジェンダリー',
    'Prefixes': 'プレフィックス',
    'Suffixes': 'サフィックス',
};

var Trans = {};
var keys = Object.keys(trans_table);
keys.forEach((key) => {
    var reg = new RegExp(key, 'g');
    Trans[key] = {
        reg: reg,
        rep: trans_table[key]
    };
});

export default Trans;
