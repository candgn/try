import { css } from 'styled-components';
import { rgba } from 'polished';

// Global style variables
export const background = {
  app: '#F6F9FC',
  appInverse: '#7A8997',
  positive: '#E1FFD4',
  negative: '#FEDED2',
  warning: '#FFF5CF',
};

export const color = {
  // Brand Colours
  OxfordColorPrimary: '#002147',
  OxfordColorSecondary: '#a79d96',
  OxfordColorTertiary: '#f3f1ee',
  OxfordColorLightPrimary: '#122f53',
  
  // General/secondary colours
  OxfordColorDarkBlue: '#001c3d',
  OxfordColorWashedOutBlue: '#193658',
  OxfordColorCopyrightGrey: '#c7c2bc',
  OxfordColorBeigeGrey: '#f3f1ec',
  OxfordColorBrownGrey: '#001c3d',
  OxfordColorFilterFormGreen: '#043946',
  OxfordColorIconBlueGrey: '#a1c4d0',
  OxfordColorTeal: '#003947',
  OxfordColorVeryLightBlue: '#f0f5f8',
  OxfordColorCookieBar: '#00152e',
  OxfordColorBlueGrey: '#353c47',

  // Link colours
  OxfordColorLink: '#3277ae',
  OxfordColorLinkHover: '#44687d',
  OxfordColorAltLinkHover: '#be0f34',
  OxfordColorLinkHeader: '#70a9d6',
  OxfordColorLinkOverlay: '#98c1e1',

  // Shades
  OxfordColorBlack: '#000000',
  OxfordColorOffBlack: '#333333',
  OxfordColorMidGrey: '#7a736e',
  OxfordColorDarkGrey: '#a6a6a6',
  OxfordColorLightGrey: '#e0ded9',
  OxfordColourVLightGrey: '#f9f8f5',
  OxfordColorWhite: '#ffffff',

  // Custom blog colours
  OxfordColorScienceBlog: '#0f7361',
  OxfordColorScienceBlogButton: '#09332b',
  OxfordColorArtsBlog: '#721627',
  OxfordColorArtsBlogButton: '#330d14',
  OxfordColorBooksBlog: '#cf7a30',
  OxfordColorBooksBlogButton: '#9c4700',

  // Graduate country page colours
  OxfordColorGraduateLightBlue: '#9eceeb',
  OxfordColorGraduateBlue: '#5f9baf',
  OxfordColorGraduateNavyBlue: '#44687d',
  OxfordColorGraduateGreyBlue: '#a1c4d0',
  OxfordColorGraduateDarkGreen: '#69913b',
  OxfordColorGraduateLightGreen: '#aab300',
  OxfordColorGraduateOrange: '#cf7a30',
  OxfordColorGraduateYellow: '#f5cf47',
  OxfordColorGraduateDarkRed: '#872434',
  OxfordColorGraduateRed: '#be0f34',
  OxfordColorGraduatePink: '#ebc4cb',
  OxfordColorGraduateGrey: '#a79d96',

  // Error colours
  OxfordColorStatus: '#7dbc23',
  OxfordColorWarning: '#bc9a23',
  OxfordColorError: '#be0f34',
  OxfordColorErrorLight: '#fff0f3',

  // Social media colours
  OxfordColorCherry: '#be0f34',
  OxfordColorPurple: '#ac48bf',
  OxfordColorRed: '#c7302b',
  OxfordColorLightBlue: '#1daced',
  OxfordColorDeepBlue: '#001c3d',
  OxfordColorLagoonBlue: '#006599',
  OxfordColorWeibo: '#d62a2a',
  OxfordColorGreen: '#177770',
  OxfordColorOrange: '#fb8113',
  OxfordColorGooglePlus: '#d34836',
  OxfordColorInstagram: '#517fa4',

  // Core palette
  CambridgePantone199C: '#d50032',
  CambridgePantone285C: '#0072ce',
  CambridgePantone158C: '#e87722',
  CambridgePantone369C: '#64a70b',
  CambridgePantone513C: '#93328e',
  CambridgePantone7466C: '#00b0b9',

  // Darker palette
  CambridgePantone1955C: '#8a1538',
  CambridgePantone541C: '#003c71',
  CambridgePantone718C: '#be4d00',
  CambridgePantone574C: '#4e5b31',
  CambridgePantone669C: '#3f2a56',
  CambridgePantone5473C: '#115e67',

  // Lighter palette
  CambridgePantone197C: '#E89CAE',
  CambridgePantone284C: '#6CACE4',
  CambridgePantone142C: '#f1be48',
  CambridgePantone583C: '#b7bf10',
  CambridgePantone5215C: '#af95a6',
  CambridgePantone557C: '#85b09a',

  // Private palette
  CambridgePantone032C: '#ef3340',
  CambridgePantone109C: '#ffd100',

  // Blues
  YaleBlue1: '#00356b',
  YaleBlue2: '#286dc0',
  YaleBlue3: '#63aaff',

  // Grays
  YaleGray1: '#222222',
  YaleGray2: '#4a4a4a',
  YaleGray3: '#978d85',
  YaleGray4: '#dddddd',
  YaleGray5: '#f9f9f9',

  // Accent Colors
  YaleAccent1: '#5f712d',
  YaleAccent2: '#bd5319',

  // Harvard Colors
  HarvardCrimson: '#a51c30',
  HarvardRed: '#ed1b34',
  HarvardSalmon: '#ec8f9c',
  HarvardBlack: '#000000',
  HarvardGrey: '#93a1ad',
  HarvardGreen: '#4db848',
  HarvardLimeGreen: '#cbdb2a',
  HarvardBlue: '#4e88c7',
  HarvardSkyBlue: '#95b5df',
  HarvardWarmYellow: '#fcb315',
  HarvardYellow: '#ffde2d',
  HarvardTurquoise: '#00aaad',
  HarvardAquamarine: '#77ced9',
  HarvardPurple: '#946eb7',
  HarvardLavender: '#bb89ca',

  // MIT Colors
  Pantone201C: '#a31f34',
  Pantone423C: '#8a8b8c',
  Pantone420C: '#c2c0bf',

  // Imperial Core colors
  ImperialNavy: '#002147',
  ImperialImperialBlue: '#003e74',
  ImperialLightGrey: '#ebeeee',
  ImperialCoolGrey: '#9d9d9d',
  ImperialLightBlue: '#d4effc',

  // Supporting colors
  ImperialBlue: '#006eaf',
  ImperialProcessBlue: '#0091d4',
  ImperialPoolBlue: '#00acd7',
  ImperialDarkTeal: '#0f8291',
  ImperialTeal: '#009cbc',
  ImperialSeaglass: '#379f9f',
  ImperialDarkGreen: '#02893b',
  ImperialKermitGreen: '#66a40a',
  ImperialLime: '#bbce00',

  // Imperial Warm colors
  ImperialOrange: '#d24000',
  ImperialTangerine: '#ec7300',
  ImperialLemonYellow: '#ffdd00',
  ImperialBrick: '#a51900',
  ImperialRed: '#dd2501',
  ImperialCherry: '#e40043',
  ImperialRaspberry: '#9f004e',
  ImperialMagentaPink: '#c81e78',
  ImperialIris: '#751e66',
  ImperialViolet: '#960078',
  ImperialPlum: '#321e6d',
  ImperialPurple: '#653098',

  // ETH Black and white
  ETHSchwarz: '#000000',
  ETHWeiss: '#ffffff',

  // Color palette ETH 1 to 9
  ETHPantone294: '#1f407a',
  ETHPantone7483: '#485a2c',
  ETHPantone2935: '#1269b0',
  ETHPantone392: '#72791c',
  ETHPantone234: '#91056a',
  ETHPantoneCoolGray9: '#6f6f6f',
  ETHPantone1797: '#a8322d',
  ETHPantone633: '#007a96',
  ETHPantone7512: '#956013',

  // ETH 1 Shades
  ETHShades1_80: '#385c9b',
  ETHShades1_60: '#748db9',
  ETHShades1_40: '#a0b1d0',
  ETHShades1_20: '#cdd6e6',
  ETHShades1_10: '#e6ebf3',

  // ETH 2 Shades
  ETHShades2_80: '#67804e',
  ETHShades2_60: '#8da07a',
  ETHShades2_40: '#b3c0a7',
  ETHShades2_20: '#d9dfd3',
  ETHShades2_10: '#ecefe9',

  // ETH 3 Shades
  ETHShades3_80: '#4187C0',
  ETHShades3_60: '#71A5D0',
  ETHShades3_40: '#A0C3DF',
  ETHShades3_20: '#D0E1EF',
  ETHShades3_10: '#E7F0F7',

  // ETH 4 Shades
  ETHShades4_80: '#8E9449',
  ETHShades4_60: '#AAAF77',
  ETHShades4_40: '#C7C9A4',
  ETHShades4_20: '#E3E4D2',
  ETHShades4_10: '#F1F1E8',

  // ETH 5 Shades
  ETHShades5_80: '#A73788',
  ETHShades5_60: '#BD69A5',
  ETHShades5_40: '#D39BC3',
  ETHShades5_20: '#E9CDE1',
  ETHShades5_10: '#F4E6F0',

// ETH 6 Shades
  ETHShades6_80: '#8C8C8C',
  ETHShades6_60: '#A9A9A9',
  ETHShades6_40: '#C5C5C5',
  ETHShades6_20: '#E2E2E2',
  ETHShades6_10: '#F1F1F1',

// ETH 7 Shades
  ETHShades7_80: '#BF534F',
  ETHShades7_60: '#CF7E7B',
  ETHShades7_40: '#DFA9A7',
  ETHShades7_20: '#EFD4D3',
  ETHShades7_10: '#F7EAE9',

// ETH 8 Shades
  ETHShades8_80: '#3395AB',
  ETHShades8_60: '#66AFC0',
  ETHShades8_40: '#99CAD5',
  ETHShades8_20: '#CCE4EA',
  ETHShades8_10: '#E5F2F5',

// ETH 9 Shades
  ETHShades9_80: '#AA8042',
  ETHShades9_60: '#C0A071',
  ETHShades9_40: '#D5C0A1',
  ETHShades9_20: '#EADFD0',
  ETHShades9_10: '#F4EFE7',

  // UCL colors
  UCLDarkGreen: '#555025',
  UCLMidGreen: '#8f993e',
  UCLBrightGreen: '#b5bd00',
  UCLLightGreen: '#bbc592',
  UCLYellow: '#f6be00',
  UCLDarkRed: '#651d32',
  UCLMidRed: '#93272c',
  UCLBrightRed: '#d50032',
  UCLLightRed: '#e03c31',
  UCLOrange: '#ea7600',
  UCLDarkPurple: '#4b384c',
  UCLMidPurple: '#500778',
  UCLBrightPurple: '#ac145a',
  UCLLightPurple: '#c6b0bc',
  UCLGrey: '#8c8279',
  UCLDarkBlue: '#003d4c',
  UCLMidBlue: '#002855',
  UCLBrightBlue: '#0097a9',
  UCLLightBlue: '#8db9ca',
  UCLBlueCeleste: '#a4dbe8',
  UCLDarkBrown: '#4e3629',
  UCLStone: '#d6d2c4',
  UCLEducationBlue: '#3255a4',

  // Google
  GoogleBlue: '#4285f4',
  GoogleYellow: '#fbbc05',
  GoogleGreen: '#34a853',
  GoogleRed: '#ea4335',

  // Twitter
  TwitterBlue: '#55acee',
  TwitterDark: '#292f33',
  TwitterGray: '#66757f',
  TwitterLightGray: '#ccd6dd',
  TwitterOpenGray: '#e1e8ed',

  // Facebook
  FacebookBlue: '#3b5998',
  FacebookLightBlue: '#8b9dc3',
  FacebookLighterBlue: '#dfe3ee',
  FacebookLightGray: '#f7f7f7',

  // Microsoft
  MicrosoftRed: '#f65314',
  MicrosoftGreen: '#7cbb00',
  MicrosoftBlue: '#00a1f1',
  MicrosoftYellow: '#ffbb00',

  // Others
  IntelBlue: '#0f7dc2',
  InstagramBlue: '#3f729b',
  IBMBlue: '#006699',
  YahooPurple: '#7b0099',
  AmazonOrange: '#ff9900',
  AmazonBlue: '#146eb4',
  NetflixBlack: '#221f1f',
  NetflixRed: '#e50914',
  NetflixGray: '#f5f5f1',
  CocaColaRed: '#ed1c16',
  PepsiRed: '#e32934',
  PepsiBlue: '#004883',
  IkeaYellow: '#ffcc00',
  IkeaBlue: '#003399',
  AndroidGreen: '#a4c639',


  border: 'rgba(0,0,0,.1)',

};

export const spacing = {
  padding: {
    small: 10,
    medium: 20,
    large: 30,
  },
  borderRadius: {
    small: 5,
    default: 10,
  },
};

export const typography = {
  type: {
    primary: '"Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
    code: '"SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace',
  },
  weight: {
    regular: '400',
    bold: '700',
    extrabold: '800',
    black: '900',
  },
  size: {
    s1: 12,
    s2: 14,
    s3: 16,
    m1: 20,
    m2: 24,
    m3: 28,
    l1: 32,
    l2: 40,
    l3: 48,
    code: 90,
  },
} as const;

export const breakpoint = 600;
export const pageMargin = 5.55555;

export const pageMargins = css`
  padding: 0 ${spacing.padding.medium}px;
  @media (min-width: ${breakpoint * 1}px) {
    margin: 0 ${pageMargin * 1}%;
  }
  @media (min-width: ${breakpoint * 2}px) {
    margin: 0 ${pageMargin * 2}%;
  }
  @media (min-width: ${breakpoint * 3}px) {
    margin: 0 ${pageMargin * 3}%;
  }
  @media (min-width: ${breakpoint * 4}px) {
    margin: 0 ${pageMargin * 4}%;
  }
`;

export const hoverEffect = css`
  border: 1px solid ${color.border};
  border-radius: ${spacing.borderRadius.small}px;
  transition: background 150ms ease-out, border 150ms ease-out,
    transform 150ms ease-out;

  &:hover,
  &.__hover {
    border-color: ${rgba(color.OxfordColorTertiary, 0.5)};
    transform: translate3d(0, -3px, 0);
    box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;
  }

  &:active,
  &.__active {
    border-color: ${rgba(color.OxfordColorTertiary, 1)};
    transform: translate3d(0, 0, 0);
  }
`;
