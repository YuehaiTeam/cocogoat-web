import { uniq } from 'lodash-es'

const versionMap = {
    80001: 1.0,
    80002: 1.0,
    80003: 1.0,
    80004: 1.0,
    80005: 1.0,
    80006: 1.0,
    80007: 1.0,
    80008: 1.0,
    80009: 1.0,
    80010: 1.0,
    80011: 1.0,
    80012: 1.0,
    80013: 1.0,
    80014: 1.0,
    80015: 1.0,
    80016: 1.0,
    80017: 1.0,
    80018: 1.0,
    80019: 1.0,
    80020: 1.0,
    80021: 1.0,
    80022: 1.0,
    80023: 1.0,
    80024: 1.0,
    80025: 1.0,
    80026: 1.0,
    80027: 1.0,
    80028: 1.0,
    80029: 1.0,
    80030: 1.0,
    80031: 1.0,
    80032: 1.0,
    80033: 1.0,
    80034: 1.0,
    80035: 1.0,
    80036: 1.0,
    80037: 1.0,
    80038: 1.0,
    80039: 1.0,
    80040: 1.0,
    80041: 1.0,
    80042: 1.0,
    80043: 1.0,
    80044: 1.0,
    80045: 1.0,
    80046: 1.0,
    80047: 1.0,
    80048: 1.0,
    80049: 1.0,
    80050: 1.0,
    80051: 1.0,
    80052: 1.0,
    80053: 1.0,
    80054: 1.0,
    80055: 1.0,
    81000: 1.0,
    81001: 1.0,
    81002: 1.0,
    81003: 1.0,
    81004: 1.0,
    81005: 1.0,
    81010: 1.0,
    81014: 1.0,
    81015: 1.0,
    81016: 1.0,
    81017: 1.0,
    81018: 1.0,
    81019: 1.0,
    81020: 1.0,
    81021: 1.0,
    81022: 1.0,
    81023: 1.0,
    81026: 1.1,
    81027: 1.1,
    81028: 1.1,
    81029: 1.1,
    81030: 1.1,
    81031: 1.1,
    81032: 1.1,
    81033: 1.2,
    81034: 1.2,
    81035: 1.2,
    81036: 1.2,
    81037: 1.2,
    81038: 1.2,
    81039: 1.2,
    81040: 1.2,
    81041: 1.2,
    81042: 1.2,
    81043: 1.2,
    81044: 1.2,
    81045: 1.2,
    81046: 1.2,
    82001: 1.0,
    82002: 1.0,
    82003: 1.0,
    82004: 1.0,
    82005: 1.0,
    82006: 1.0,
    82007: 1.0,
    82008: 1.0,
    82009: 1.0,
    82010: 1.0,
    82012: 1.0,
    82013: 1.0,
    82014: 1.0,
    82015: 1.0,
    82017: 1.0,
    82019: 1.0,
    82020: 1.0,
    82021: 1.0,
    82022: 1.0,
    82023: 1.0,
    82024: 1.0,
    82025: 1.0,
    82026: 1.0,
    82027: 1.0,
    82028: 1.0,
    82029: 1.0,
    82030: 1.0,
    82031: 1.0,
    82032: 1.0,
    82033: 1.0,
    82034: 1.0,
    82035: 1.0,
    82036: 1.0,
    82037: 1.0,
    82038: 1.0,
    82039: 1.0,
    82040: 1.0,
    82041: 1.0,
    82042: 1.0,
    82043: 1.0,
    82044: 1.0,
    82045: 1.0,
    82046: 1.0,
    82047: 1.0,
    82048: 1.0,
    82049: 1.0,
    82050: 1.0,
    82051: 1.0,
    82052: 1.0,
    82063: 1.1,
    82064: 1.1,
    82065: 1.1,
    84000: 1.0,
    84001: 1.0,
    84002: 1.0,
    84003: 1.0,
    84004: 1.0,
    84005: 1.0,
    84006: 1.0,
    84007: 1.0,
    84008: 1.0,
    84009: 1.0,
    84010: 1.0,
    84011: 1.0,
    84012: 1.0,
    84013: 1.0,
    84014: 1.0,
    84015: 1.0,
    84016: 1.0,
    84017: 1.0,
    84501: 1.0,
    84502: 1.0,
    84503: 1.0,
    84504: 1.0,
    84505: 1.0,
    84506: 1.0,
    84507: 1.0,
    84508: 1.0,
    84509: 1.0,
    84510: 1.0,
    84512: 1.0,
    84513: 1.0,
    84514: 1.0,
    84515: 1.0,
    84516: 1.0,
    84518: 1.0,
    84519: 1.0,
    84520: 1.0,
    84522: 1.0,
    84523: 1.0,
    84524: 1.0,
    84525: 1.0,
    84526: 1.0,
    84527: 1.0,
    85000: 1.0,
    85001: 1.0,
    85002: 1.0,
    85003: 1.0,
    85004: 1.0,
    85005: 1.0,
    85006: 1.0,
    86001: 1.0,
    86002: 1.0,
    86003: 1.0,
    86004: 1.0,
    86005: 1.0,
    86006: 1.0,
    86007: 1.0,
    86008: 1.0,
    86009: 1.0,
    86010: 1.0,
    86011: 1.0,
    86012: 1.0,
    86013: 1.0,
    81024: 1.1,
    81025: 1.1,
    82053: 1.1,
    82054: 1.1,
    82055: 1.1,
    82056: 1.1,
    82057: 1.1,
    82058: 1.1,
    82059: 1.1,
    82060: 1.1,
    82061: 1.1,
    82062: 1.1,
    84018: 1.1,
    84019: 1.1,
    84020: 1.1,
    84021: 1.1,
    84022: 1.1,
    84023: 1.1,
    84024: 1.1,
    80056: 1.2,
    80057: 1.2,
    80058: 1.2,
    80059: 1.2,
    80060: 1.2,
    80061: 1.2,
    80062: 1.2,
    80063: 1.2,
    80064: 1.2,
    80065: 1.2,
    80066: 1.2,
    80067: 1.2,
    80068: 1.2,
    82066: 1.2,
    82067: 1.2,
    82068: 1.2,
    82069: 1.2,
    82070: 1.2,
    82071: 1.2,
    82072: 1.2,
    82073: 1.2,
    81047: 1.3,
    82074: 1.3,
    82075: 1.4,
    82076: 1.3,
    82077: 1.3,
    82078: 1.3,
    82079: 1.3,
    82080: 1.3,
    82081: 1.3,
    82082: 1.3,
    82083: 1.3,
    82084: 1.3,
    82085: 1.3,
    82086: 1.3,
    82087: 1.3,
    84025: 1.3,
    81048: 1.4,
    84026: 1.4,
    84028: 1.4,
    84029: 1.4,
    84030: 1.4,
    84031: 1.4,
    84032: 1.4,
    84033: 1.4,
    84100: 1.4,
    84101: 1.4,
    84102: 1.4,
    84103: 1.4,
    84104: 1.4,
    84105: 1.4,
    84106: 1.4,
    84107: 1.4,
    84108: 1.4,
    84109: 1.4,
    81049: 1.5,
    81050: 1.5,
    81051: 1.5,
    81052: 1.5,
    81053: 1.5,
    81054: 1.5,
    81055: 1.5,
    81056: 1.5,
    81057: 1.5,
    81058: 1.5,
    81059: 1.5,
    81060: 1.5,
    81061: 1.5,
    81062: 1.5,
    81063: 1.5,
    81064: 1.5,
    81065: 1.5,
    81066: 1.5,
    81067: 1.5,
    81068: 1.5,
    81069: 1.5,
    81070: 1.5,
    81071: 1.5,
    81072: 1.5,
    81073: 1.5,
    82088: 1.5,
    82089: 1.5,
    82090: 1.5,
    84110: 1.5,
    84111: 1.5,
    84112: 1.5,
    84113: 1.5,
    84114: 1.5,
    84115: 1.5,
    81074: 1.6,
    81075: 1.6,
    81076: 1.6,
    81077: 1.6,
    81078: 1.6,
    81079: 1.6,
    81080: 1.6,
    81081: 1.6,
    81082: 1.6,
    81083: 1.6,
    81084: 1.6,
    81085: 1.6,
    84034: 1.6,
    84035: 1.6,
    84036: 1.6,
    80069: 2.0,
    80070: 2.0,
    80071: 2.0,
    80072: 2.0,
    80073: 2.0,
    80074: 2.0,
    80075: 2.0,
    80076: 2.0,
    80077: 2.0,
    80078: 2.0,
    80079: 2.0,
    80080: 2.0,
    80081: 2.0,
    80082: 2.0,
    80083: 2.0,
    80084: 2.0,
    80085: 2.0,
    80086: 2.0,
    80087: 2.0,
    80088: 2.0,
    80089: 2.0,
    80090: 2.0,
    80091: 2.0,
    80092: 2.0,
    80093: 2.0,
    80094: 2.0,
    80095: 2.0,
    81086: 2.0,
    81087: 2.0,
    81088: 2.0,
    81089: 2.0,
    81090: 2.0,
    81091: 2.0,
    81092: 2.0,
    81093: 2.0,
    81094: 2.0,
    81095: 2.0,
    81096: 2.0,
    81097: 2.0,
    81098: 2.0,
    81099: 2.0,
    81100: 2.0,
    81104: 2.0,
    81105: 2.4,
    81106: 2.0,
    81108: 2.0,
    81109: 2.0,
    81111: 2.0,
    81112: 2.0,
    81113: 2.0,
    81114: 2.0,
    81115: 2.0,
    81116: 2.0,
    81117: 2.0,
    81118: 2.0,
    81119: 2.0,
    81120: 2.0,
    81121: 2.0,
    81122: 2.0,
    81123: 2.0,
    81124: 2.0,
    81125: 2.0,
    81130: 2.0,
    82091: 2.0,
    82092: 2.0,
    82093: 2.0,
    82094: 2.0,
    82095: 2.0,
    82096: 2.0,
    82097: 2.0,
    82098: 2.0,
    82099: 2.0,
    82100: 2.0,
    82101: 2.0,
    82102: 2.0,
    82103: 2.0,
    82104: 2.0,
    82105: 2.0,
    82106: 2.0,
    82107: 2.0,
    82108: 2.0,
    82109: 2.0,
    84037: 2.0,
    84038: 2.0,
    84039: 2.0,
    84040: 2.0,
    84041: 2.0,
    84042: 2.0,
    84043: 2.0,
    84528: 2.0,
    84529: 2.0,
    84530: 2.0,
    84531: 2.0,
    84532: 2.0,
    84533: 2.0,
    84534: 2.0,
    84535: 2.0,
    84536: 2.0,
    84537: 2.0,
    84538: 2.0,
    84539: 2.0,
    84540: 2.0,
    86015: 2.0,
    86016: 2.0,
    86017: 2.0,
    86018: 2.0,
    86019: 2.0,
    86020: 2.0,
    80096: 2.1,
    80097: 2.1,
    80098: 2.1,
    80099: 2.1,
    80100: 2.1,
    80101: 2.1,
    80102: 2.1,
    80105: 2.1,
    80106: 2.1,
    80107: 2.1,
    80108: 2.1,
    80109: 2.1,
    80110: 2.1,
    80111: 2.1,
    80112: 2.1,
    81131: 2.1,
    81132: 2.1,
    81133: 2.1,
    81134: 2.1,
    81135: 2.1,
    81136: 2.1,
    81137: 2.1,
    81138: 2.1,
    81139: 2.1,
    81140: 2.1,
    81141: 2.1,
    81142: 2.1,
    81143: 2.1,
    81144: 2.1,
    81150: 2.1,
    81151: 2.1,
    81152: 2.1,
    81153: 2.1,
    81154: 2.1,
    81155: 2.1,
    81156: 2.1,
    81157: 2.1,
    81158: 2.1,
    81159: 2.1,
    81160: 2.1,
    81161: 2.1,
    81162: 2.1,
    81163: 2.1,
    81164: 2.1,
    81165: 2.1,
    82110: 2.1,
    82111: 2.1,
    82112: 2.1,
    82113: 2.1,
    82114: 2.1,
    84044: 2.0,
    84045: 2.0,
    84046: 2.0,
    84047: 2.1,
    84048: 2.1,
    84049: 2.1,
    84050: 2.1,
    84051: 2.1,
    84052: 2.1,
    84541: 2.1,
    84542: 2.1,
    86021: 2.0,
    80113: 2.2,
    80114: 2.2,
    80115: 2.2,
    80116: 2.2,
    80119: 2.2,
    80120: 2.2,
    80121: 2.2,
    80122: 2.2,
    80123: 2.2,
    80124: 2.2,
    80125: 2.2,
    80126: 2.2,
    81167: 2.2,
    81168: 2.2,
    81170: 2.2,
    81171: 2.2,
    81172: 2.2,
    81173: 2.2,
    81174: 2.2,
    81175: 2.2,
    81176: 2.2,
    81177: 2.2,
    81179: 2.2,
    81180: 2.2,
    81181: 2.2,
    84116: 2.2,
    84117: 2.2,
    84118: 2.2,
    84119: 2.2,
    84120: 2.2,
    84121: 2.2,
    80127: 2.3,
    80128: 2.3,
    80129: 2.3,
    81182: 2.3,
    81183: 2.3,
    84122: 2.3,
    84123: 2.3,
    84124: 2.3,
    84125: 2.3,
    84126: 2.3,
    84127: 2.3,
    80130: 2.4,
    80131: 2.4,
    80132: 2.4,
    80133: 2.4,
    80134: 2.4,
    80135: 2.4,
    80136: 2.4,
    80137: 2.4,
    80138: 2.4,
    80139: 2.4,
    80140: 2.4,
    80141: 2.4,
    81184: 2.4,
    81185: 2.4,
    81186: 2.4,
    81187: 2.4,
    81188: 2.4,
    81189: 2.4,
    81191: 2.4,
    81192: 2.4,
    81193: 2.4,
    81194: 2.4,
    81195: 2.4,
    81196: 2.4,
    81197: 2.4,
    81198: 2.4,
    84053: 2.4,
    84054: 2.4,
    84055: 2.4,
    84056: 2.4,
    84057: 2.4,
    84058: 2.4,
    84059: 2.4,
    84128: 2.4,
    84129: 2.4,
    84130: 2.4,
    84131: 2.4,
    84132: 2.4,
    84133: 2.4,
    82121: 2.5,
    82122: 2.5,
    82123: 2.5,
    82124: 2.5,
    82125: 2.5,
    80142: 2.6,
    80143: 2.6,
    80144: 2.6,
    80145: 2.6,
    80146: 2.6,
    80147: 2.6,
    80148: 2.6,
    80149: 2.6,
    80150: 2.6,
    80151: 2.6,
    80152: 2.6,
    80153: 2.6,
    80154: 2.6,
    80155: 2.6,
    80156: 2.6,
    80157: 2.6,
    80158: 2.6,
    80159: 2.6,
    81199: 2.6,
    81200: 2.6,
    81201: 2.6,
    81202: 2.6,
    81203: 2.6,
    81204: 2.6,
    81205: 2.6,
    81206: 2.6,
    81207: 2.6,
    81208: 2.6,
    81209: 2.6,
    81210: 2.6,
    81211: 2.6,
    81212: 2.6,
    81213: 2.6,
    81214: 2.6,
    81215: 2.6,
    81216: 2.6,
    81217: 2.6,
    81218: 2.6,
    81220: 2.6,
    81221: 2.6,
    81222: 2.6,
    82115: 2.6,
    82116: 2.6,
    82117: 2.6,
    82118: 2.6,
    82119: 2.6,
    82120: 2.6,
    82126: 2.6,
    82127: 2.6,
    82128: 2.6,
    84060: 2.6,
    84061: 2.6,
    84062: 2.6,
    84063: 2.6,
    84064: 2.7,
    84065: 2.7,
    84066: 2.7,
    84134: 2.7,
    84135: 2.7,
    84136: 2.7,
    84137: 2.8,
    84138: 2.8,
    84139: 2.8,
} as Record<number, number>
export const versionDateMap = {
    2.8: new Date('2022-07-13'),
    2.7: new Date('2022-05-31'),
    2.6: new Date('2022-03-30'),
} as Record<number, Date>
export default versionMap
export const allVersions = uniq(Object.values(versionMap)).sort((a, b) => b - a)
