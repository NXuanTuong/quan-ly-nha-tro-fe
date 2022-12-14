import { useLocation } from 'react-router-dom';
import { MotelType } from '~/types/MotelType';
import { RoomType } from '~/types/RoomType';
import { IUser } from '~/types/User.type';
import moment from 'moment';

const generatePriceToVND = (
    price?: number,
    option?: Intl.NumberFormatOptions
) => {
    if (!option) {
        return price?.toLocaleString('vi');
    }
    if (!price) {
        return '';
    }
    return price?.toLocaleString('vi', {
        currency: 'VND',
        style: 'currency',
    });
};

const useGetParam = (param: string) => {
    const { search } = useLocation();
    const result = new URLSearchParams(search).get(param) || '';
    return [result];
};
const exportHtmlToWord = (data: {
    lessor: IUser;
    motelRoom: RoomType;
    roomRentalDetail: any;
    motel: MotelType;
}) => {
    const { lessor, motelRoom, roomRentalDetail, motel } = data;
    const sourceHTML = `<html
	xmlns:v="urn:schemas-microsoft-com:vml"
	xmlns:o="urn:schemas-microsoft-com:office:office"
	xmlns:w="urn:schemas-microsoft-com:office:word"
	xmlns:m="http://schemas.microsoft.com/office/2004/12/omml"
	xmlns="http://www.w3.org/TR/REC-html40"
>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=unicode" />
		<meta name="ProgId" content="Word.Document" />
		<meta name="Generator" content="Microsoft Word 15" />
		<meta name="Originator" content="Microsoft Word 15" />
		<link rel="File-List" href="abcd_files/filelist.xml" />
		<title>Nha Tro Vuong Anh</title>
		<style>
			 @font-face
				{font-family:Wingdings;
				panose-1:5 0 0 0 0 0 0 0 0 0;
				mso-font-charset:2;
				mso-generic-font-family:auto;
				mso-font-pitch:variable;
				mso-font-signature:0 268435456 0 0 -2147483648 0;}
			@font-face
				{font-family:"Cambria Math";
				panose-1:2 4 5 3 5 4 6 3 2 4;
				mso-font-charset:0;
				mso-generic-font-family:roman;
				mso-font-pitch:variable;
				mso-font-signature:3 0 0 0 1 0;}
			 /* Style Definitions */
			 p.MsoNormal, li.MsoNormal, div.MsoNormal
				{mso-style-unhide:no;
				mso-style-qformat:yes;
				mso-style-parent:"";
				margin:0cm;
				mso-pagination:widow-orphan;
				font-size:12.0pt;
				font-family:"Times New Roman",serif;
				mso-fareast-font-family:"Times New Roman";
				mso-fareast-theme-font:minor-fareast;}
			a:link, span.MsoHyperlink
				{mso-style-noshow:yes;
				mso-style-priority:99;
				color:blue;
				text-decoration:underline;
				text-underline:single;}
			a:visited, span.MsoHyperlinkFollowed
				{mso-style-noshow:yes;
				mso-style-priority:99;
				color:purple;
				text-decoration:underline;
				text-underline:single;}
			p
				{mso-style-noshow:yes;
				mso-style-priority:99;
				mso-margin-top-alt:auto;
				margin-right:0cm;
				mso-margin-bottom-alt:auto;
				margin-left:0cm;
				mso-pagination:widow-orphan;
				font-size:12.0pt;
				font-family:"Times New Roman",serif;
				mso-fareast-font-family:"Times New Roman";
				mso-fareast-theme-font:minor-fareast;}
			p.msonormal0, li.msonormal0, div.msonormal0
				{mso-style-name:msonormal;
				mso-style-noshow:yes;
				mso-style-priority:99;
				mso-style-unhide:no;
				mso-margin-top-alt:auto;
				margin-right:0cm;
				mso-margin-bottom-alt:auto;
				margin-left:0cm;
				mso-pagination:widow-orphan;
				font-size:12.0pt;
				font-family:"Times New Roman",serif;
				mso-fareast-font-family:"Times New Roman";
				mso-fareast-theme-font:minor-fareast;}
			span.SpellE
				{mso-style-name:"";
				mso-spl-e:yes;}
			span.GramE
				{mso-style-name:"";
				mso-gram-e:yes;}
			.MsoChpDefault
				{mso-style-type:export-only;
				mso-default-props:yes;
				font-size:10.0pt;
				mso-ansi-font-size:10.0pt;
				mso-bidi-font-size:10.0pt;}
			@page WordSection1
				{size:612.0pt 792.0pt;
				margin:57.6pt 72.0pt 57.6pt 72.0pt;
				mso-header-margin:36.0pt;
				mso-footer-margin:36.0pt;
				mso-paper-source:0;}
			div.WordSection1
				{page:WordSection1;}
			 /* List Definitions */
			 @list l0
				{mso-list-id:5714517;
				mso-list-template-ids:957926690;}
			@list l0:level1
				{mso-level-number-format:bullet;
				mso-level-text:???;
				mso-level-tab-stop:36.0pt;
				mso-level-number-position:left;
				text-indent:-18.0pt;
				mso-ansi-font-size:10.0pt;
				font-family:Symbol;}
			@list l0:level2
				{mso-level-number-format:bullet;
				mso-level-text:o;
				mso-level-tab-stop:72.0pt;
				mso-level-number-position:left;
				text-indent:-18.0pt;
				mso-ansi-font-size:10.0pt;
				font-family:"Courier New";
				mso-bidi-font-family:"Times New Roman";}
			@list l0:level3
				{mso-level-number-format:bullet;
				mso-level-text:???;
				mso-level-tab-stop:108.0pt;
				mso-level-number-position:left;
				text-indent:-18.0pt;
				mso-ansi-font-size:10.0pt;
				font-family:Wingdings;}
			@list l0:level4
				{mso-level-number-format:bullet;
				mso-level-text:???;
				mso-level-tab-stop:144.0pt;
				mso-level-number-position:left;
				text-indent:-18.0pt;
				mso-ansi-font-size:10.0pt;
				font-family:Wingdings;}
			@list l0:level5
				{mso-level-number-format:bullet;
				mso-level-text:???;
				mso-level-tab-stop:180.0pt;
				mso-level-number-position:left;
				text-indent:-18.0pt;
				mso-ansi-font-size:10.0pt;
				font-family:Wingdings;}
			@list l0:level6
				{mso-level-number-format:bullet;
				mso-level-text:???;
				mso-level-tab-stop:216.0pt;
				mso-level-number-position:left;
				text-indent:-18.0pt;
				mso-ansi-font-size:10.0pt;
				font-family:Wingdings;}
			@list l0:level7
				{mso-level-number-format:bullet;
				mso-level-text:???;
				mso-level-tab-stop:252.0pt;
				mso-level-number-position:left;
				text-indent:-18.0pt;
				mso-ansi-font-size:10.0pt;
				font-family:Wingdings;}
			@list l0:level8
				{mso-level-number-format:bullet;
				mso-level-text:???;
				mso-level-tab-stop:288.0pt;
				mso-level-number-position:left;
				text-indent:-18.0pt;
				mso-ansi-font-size:10.0pt;
				font-family:Wingdings;}
			@list l0:level9
				{mso-level-number-format:bullet;
				mso-level-text:???;
				mso-level-tab-stop:324.0pt;
				mso-level-number-position:left;
				text-indent:-18.0pt;
				mso-ansi-font-size:10.0pt;
				font-family:Wingdings;}
			@list l1
				{mso-list-id:663044915;
				mso-list-template-ids:-1893564628;}
			@list l1:level1
				{mso-level-number-format:bullet;
				mso-level-text:???;
				mso-level-tab-stop:36.0pt;
				mso-level-number-position:left;
				text-indent:-18.0pt;
				mso-ansi-font-size:10.0pt;
				font-family:Symbol;}
			@list l1:level2
				{mso-level-number-format:bullet;
				mso-level-text:o;
				mso-level-tab-stop:72.0pt;
				mso-level-number-position:left;
				text-indent:-18.0pt;
				mso-ansi-font-size:10.0pt;
				font-family:"Courier New";
				mso-bidi-font-family:"Times New Roman";}
			@list l1:level3
				{mso-level-number-format:bullet;
				mso-level-text:???;
				mso-level-tab-stop:108.0pt;
				mso-level-number-position:left;
				text-indent:-18.0pt;
				mso-ansi-font-size:10.0pt;
				font-family:Wingdings;}
			@list l1:level4
				{mso-level-number-format:bullet;
				mso-level-text:???;
				mso-level-tab-stop:144.0pt;
				mso-level-number-position:left;
				text-indent:-18.0pt;
				mso-ansi-font-size:10.0pt;
				font-family:Wingdings;}
			@list l1:level5
				{mso-level-number-format:bullet;
				mso-level-text:???;
				mso-level-tab-stop:180.0pt;
				mso-level-number-position:left;
				text-indent:-18.0pt;
				mso-ansi-font-size:10.0pt;
				font-family:Wingdings;}
			@list l1:level6
				{mso-level-number-format:bullet;
				mso-level-text:???;
				mso-level-tab-stop:216.0pt;
				mso-level-number-position:left;
				text-indent:-18.0pt;
				mso-ansi-font-size:10.0pt;
				font-family:Wingdings;}
			@list l1:level7
				{mso-level-number-format:bullet;
				mso-level-text:???;
				mso-level-tab-stop:252.0pt;
				mso-level-number-position:left;
				text-indent:-18.0pt;
				mso-ansi-font-size:10.0pt;
				font-family:Wingdings;}
			@list l1:level8
				{mso-level-number-format:bullet;
				mso-level-text:???;
				mso-level-tab-stop:288.0pt;
				mso-level-number-position:left;
				text-indent:-18.0pt;
				mso-ansi-font-size:10.0pt;
				font-family:Wingdings;}
			@list l1:level9
				{mso-level-number-format:bullet;
				mso-level-text:???;
				mso-level-tab-stop:324.0pt;
				mso-level-number-position:left;
				text-indent:-18.0pt;
				mso-ansi-font-size:10.0pt;
				font-family:Wingdings;}
			@list l2
				{mso-list-id:813906759;
				mso-list-template-ids:-1835519156;}
			@list l2:level1
				{mso-level-number-format:bullet;
				mso-level-text:???;
				mso-level-tab-stop:36.0pt;
				mso-level-number-position:left;
				text-indent:-18.0pt;
				mso-ansi-font-size:10.0pt;
				font-family:Symbol;}
			@list l2:level2
				{mso-level-number-format:bullet;
				mso-level-text:o;
				mso-level-tab-stop:72.0pt;
				mso-level-number-position:left;
				text-indent:-18.0pt;
				mso-ansi-font-size:10.0pt;
				font-family:"Courier New";
				mso-bidi-font-family:"Times New Roman";}
			@list l2:level3
				{mso-level-number-format:bullet;
				mso-level-text:???;
				mso-level-tab-stop:108.0pt;
				mso-level-number-position:left;
				text-indent:-18.0pt;
				mso-ansi-font-size:10.0pt;
				font-family:Wingdings;}
			@list l2:level4
				{mso-level-number-format:bullet;
				mso-level-text:???;
				mso-level-tab-stop:144.0pt;
				mso-level-number-position:left;
				text-indent:-18.0pt;
				mso-ansi-font-size:10.0pt;
				font-family:Wingdings;}
			@list l2:level5
				{mso-level-number-format:bullet;
				mso-level-text:???;
				mso-level-tab-stop:180.0pt;
				mso-level-number-position:left;
				text-indent:-18.0pt;
				mso-ansi-font-size:10.0pt;
				font-family:Wingdings;}
			@list l2:level6
				{mso-level-number-format:bullet;
				mso-level-text:???;
				mso-level-tab-stop:216.0pt;
				mso-level-number-position:left;
				text-indent:-18.0pt;
				mso-ansi-font-size:10.0pt;
				font-family:Wingdings;}
			@list l2:level7
				{mso-level-number-format:bullet;
				mso-level-text:???;
				mso-level-tab-stop:252.0pt;
				mso-level-number-position:left;
				text-indent:-18.0pt;
				mso-ansi-font-size:10.0pt;
				font-family:Wingdings;}
			@list l2:level8
				{mso-level-number-format:bullet;
				mso-level-text:???;
				mso-level-tab-stop:288.0pt;
				mso-level-number-position:left;
				text-indent:-18.0pt;
				mso-ansi-font-size:10.0pt;
				font-family:Wingdings;}
			@list l2:level9
				{mso-level-number-format:bullet;
				mso-level-text:???;
				mso-level-tab-stop:324.0pt;
				mso-level-number-position:left;
				text-indent:-18.0pt;
				mso-ansi-font-size:10.0pt;
				font-family:Wingdings;}
			@list l3
				{mso-list-id:864635239;
				mso-list-template-ids:1598305798;}
			@list l3:level1
				{mso-level-number-format:bullet;
				mso-level-text:???;
				mso-level-tab-stop:36.0pt;
				mso-level-number-position:left;
				text-indent:-18.0pt;
				mso-ansi-font-size:10.0pt;
				font-family:Symbol;}
			@list l3:level2
				{mso-level-number-format:bullet;
				mso-level-text:o;
				mso-level-tab-stop:72.0pt;
				mso-level-number-position:left;
				text-indent:-18.0pt;
				mso-ansi-font-size:10.0pt;
				font-family:"Courier New";
				mso-bidi-font-family:"Times New Roman";}
			@list l3:level3
				{mso-level-number-format:bullet;
				mso-level-text:???;
				mso-level-tab-stop:108.0pt;
				mso-level-number-position:left;
				text-indent:-18.0pt;
				mso-ansi-font-size:10.0pt;
				font-family:Wingdings;}
			@list l3:level4
				{mso-level-number-format:bullet;
				mso-level-text:???;
				mso-level-tab-stop:144.0pt;
				mso-level-number-position:left;
				text-indent:-18.0pt;
				mso-ansi-font-size:10.0pt;
				font-family:Wingdings;}
			@list l3:level5
				{mso-level-number-format:bullet;
				mso-level-text:???;
				mso-level-tab-stop:180.0pt;
				mso-level-number-position:left;
				text-indent:-18.0pt;
				mso-ansi-font-size:10.0pt;
				font-family:Wingdings;}
			@list l3:level6
				{mso-level-number-format:bullet;
				mso-level-text:???;
				mso-level-tab-stop:216.0pt;
				mso-level-number-position:left;
				text-indent:-18.0pt;
				mso-ansi-font-size:10.0pt;
				font-family:Wingdings;}
			@list l3:level7
				{mso-level-number-format:bullet;
				mso-level-text:???;
				mso-level-tab-stop:252.0pt;
				mso-level-number-position:left;
				text-indent:-18.0pt;
				mso-ansi-font-size:10.0pt;
				font-family:Wingdings;}
			@list l3:level8
				{mso-level-number-format:bullet;
				mso-level-text:???;
				mso-level-tab-stop:288.0pt;
				mso-level-number-position:left;
				text-indent:-18.0pt;
				mso-ansi-font-size:10.0pt;
				font-family:Wingdings;}
			@list l3:level9
				{mso-level-number-format:bullet;
				mso-level-text:???;
				mso-level-tab-stop:324.0pt;
				mso-level-number-position:left;
				text-indent:-18.0pt;
				mso-ansi-font-size:10.0pt;
				font-family:Wingdings;}
			@list l4
				{mso-list-id:1353799827;
				mso-list-template-ids:-1553592572;}
			@list l4:level1
				{mso-level-number-format:bullet;
				mso-level-text:???;
				mso-level-tab-stop:36.0pt;
				mso-level-number-position:left;
				text-indent:-18.0pt;
				mso-ansi-font-size:10.0pt;
				font-family:Symbol;}
			@list l4:level2
				{mso-level-number-format:bullet;
				mso-level-text:o;
				mso-level-tab-stop:72.0pt;
				mso-level-number-position:left;
				text-indent:-18.0pt;
				mso-ansi-font-size:10.0pt;
				font-family:"Courier New";
				mso-bidi-font-family:"Times New Roman";}
			@list l4:level3
				{mso-level-number-format:bullet;
				mso-level-text:???;
				mso-level-tab-stop:108.0pt;
				mso-level-number-position:left;
				text-indent:-18.0pt;
				mso-ansi-font-size:10.0pt;
				font-family:Wingdings;}
			@list l4:level4
				{mso-level-number-format:bullet;
				mso-level-text:???;
				mso-level-tab-stop:144.0pt;
				mso-level-number-position:left;
				text-indent:-18.0pt;
				mso-ansi-font-size:10.0pt;
				font-family:Wingdings;}
			@list l4:level5
				{mso-level-number-format:bullet;
				mso-level-text:???;
				mso-level-tab-stop:180.0pt;
				mso-level-number-position:left;
				text-indent:-18.0pt;
				mso-ansi-font-size:10.0pt;
				font-family:Wingdings;}
			@list l4:level6
				{mso-level-number-format:bullet;
				mso-level-text:???;
				mso-level-tab-stop:216.0pt;
				mso-level-number-position:left;
				text-indent:-18.0pt;
				mso-ansi-font-size:10.0pt;
				font-family:Wingdings;}
			@list l4:level7
				{mso-level-number-format:bullet;
				mso-level-text:???;
				mso-level-tab-stop:252.0pt;
				mso-level-number-position:left;
				text-indent:-18.0pt;
				mso-ansi-font-size:10.0pt;
				font-family:Wingdings;}
			@list l4:level8
				{mso-level-number-format:bullet;
				mso-level-text:???;
				mso-level-tab-stop:288.0pt;
				mso-level-number-position:left;
				text-indent:-18.0pt;
				mso-ansi-font-size:10.0pt;
				font-family:Wingdings;}
			@list l4:level9
				{mso-level-number-format:bullet;
				mso-level-text:???;
				mso-level-tab-stop:324.0pt;
				mso-level-number-position:left;
				text-indent:-18.0pt;
				mso-ansi-font-size:10.0pt;
				font-family:Wingdings;}
			@list l5
				{mso-list-id:1616863490;
				mso-list-template-ids:-1690037512;}
			@list l5:level1
				{mso-level-number-format:bullet;
				mso-level-text:???;
				mso-level-tab-stop:36.0pt;
				mso-level-number-position:left;
				text-indent:-18.0pt;
				mso-ansi-font-size:10.0pt;
				font-family:Symbol;}
			@list l5:level2
				{mso-level-number-format:bullet;
				mso-level-text:o;
				mso-level-tab-stop:72.0pt;
				mso-level-number-position:left;
				text-indent:-18.0pt;
				mso-ansi-font-size:10.0pt;
				font-family:"Courier New";
				mso-bidi-font-family:"Times New Roman";}
			@list l5:level3
				{mso-level-number-format:bullet;
				mso-level-text:???;
				mso-level-tab-stop:108.0pt;
				mso-level-number-position:left;
				text-indent:-18.0pt;
				mso-ansi-font-size:10.0pt;
				font-family:Wingdings;}
			@list l5:level4
				{mso-level-number-format:bullet;
				mso-level-text:???;
				mso-level-tab-stop:144.0pt;
				mso-level-number-position:left;
				text-indent:-18.0pt;
				mso-ansi-font-size:10.0pt;
				font-family:Wingdings;}
			@list l5:level5
				{mso-level-number-format:bullet;
				mso-level-text:???;
				mso-level-tab-stop:180.0pt;
				mso-level-number-position:left;
				text-indent:-18.0pt;
				mso-ansi-font-size:10.0pt;
				font-family:Wingdings;}
			@list l5:level6
				{mso-level-number-format:bullet;
				mso-level-text:???;
				mso-level-tab-stop:216.0pt;
				mso-level-number-position:left;
				text-indent:-18.0pt;
				mso-ansi-font-size:10.0pt;
				font-family:Wingdings;}
			@list l5:level7
				{mso-level-number-format:bullet;
				mso-level-text:???;
				mso-level-tab-stop:252.0pt;
				mso-level-number-position:left;
				text-indent:-18.0pt;
				mso-ansi-font-size:10.0pt;
				font-family:Wingdings;}
			@list l5:level8
				{mso-level-number-format:bullet;
				mso-level-text:???;
				mso-level-tab-stop:288.0pt;
				mso-level-number-position:left;
				text-indent:-18.0pt;
				mso-ansi-font-size:10.0pt;
				font-family:Wingdings;}
			@list l5:level9
				{mso-level-number-format:bullet;
				mso-level-text:???;
				mso-level-tab-stop:324.0pt;
				mso-level-number-position:left;
				text-indent:-18.0pt;
				mso-ansi-font-size:10.0pt;
				font-family:Wingdings;}
			@list l6
				{mso-list-id:1693336881;
				mso-list-template-ids:1821013932;}
			@list l6:level1
				{mso-level-number-format:bullet;
				mso-level-text:???;
				mso-level-tab-stop:36.0pt;
				mso-level-number-position:left;
				text-indent:-18.0pt;
				mso-ansi-font-size:10.0pt;
				font-family:Symbol;}
			@list l6:level2
				{mso-level-number-format:bullet;
				mso-level-text:o;
				mso-level-tab-stop:72.0pt;
				mso-level-number-position:left;
				text-indent:-18.0pt;
				mso-ansi-font-size:10.0pt;
				font-family:"Courier New";
				mso-bidi-font-family:"Times New Roman";}
			@list l6:level3
				{mso-level-number-format:bullet;
				mso-level-text:???;
				mso-level-tab-stop:108.0pt;
				mso-level-number-position:left;
				text-indent:-18.0pt;
				mso-ansi-font-size:10.0pt;
				font-family:Wingdings;}
			@list l6:level4
				{mso-level-number-format:bullet;
				mso-level-text:???;
				mso-level-tab-stop:144.0pt;
				mso-level-number-position:left;
				text-indent:-18.0pt;
				mso-ansi-font-size:10.0pt;
				font-family:Wingdings;}
			@list l6:level5
				{mso-level-number-format:bullet;
				mso-level-text:???;
				mso-level-tab-stop:180.0pt;
				mso-level-number-position:left;
				text-indent:-18.0pt;
				mso-ansi-font-size:10.0pt;
				font-family:Wingdings;}
			@list l6:level6
				{mso-level-number-format:bullet;
				mso-level-text:???;
				mso-level-tab-stop:216.0pt;
				mso-level-number-position:left;
				text-indent:-18.0pt;
				mso-ansi-font-size:10.0pt;
				font-family:Wingdings;}
			@list l6:level7
				{mso-level-number-format:bullet;
				mso-level-text:???;
				mso-level-tab-stop:252.0pt;
				mso-level-number-position:left;
				text-indent:-18.0pt;
				mso-ansi-font-size:10.0pt;
				font-family:Wingdings;}
			@list l6:level8
				{mso-level-number-format:bullet;
				mso-level-text:???;
				mso-level-tab-stop:288.0pt;
				mso-level-number-position:left;
				text-indent:-18.0pt;
				mso-ansi-font-size:10.0pt;
				font-family:Wingdings;}
			@list l6:level9
				{mso-level-number-format:bullet;
				mso-level-text:???;
				mso-level-tab-stop:324.0pt;
				mso-level-number-position:left;
				text-indent:-18.0pt;
				mso-ansi-font-size:10.0pt;
				font-family:Wingdings;}
			ol
				{margin-bottom:0cm;}
			ul
				{margin-bottom:0cm;}
			-->
		</style>
		<style>
			/* Style Definitions */
			table.MsoNormalTable {
				mso-style-name: 'Table Normal';
				mso-tstyle-rowband-size: 0;
				mso-tstyle-colband-size: 0;
				mso-style-noshow: yes;
				mso-style-priority: 99;
				mso-style-parent: '';
				mso-padding-alt: 0cm 5.4pt 0cm 5.4pt;
				mso-para-margin: 0cm;
				mso-pagination: widow-orphan;
				font-size: 10pt;
				font-family: 'Times New Roman', serif;
			}
		</style>
	</head>

	<body
		lang="VI"
		link="blue"
		vlink="purple"
		style="tab-interval: 36pt; word-wrap: break-word"
	>
		<div class="WordSection1">
			<p
				align="center"
				style="
					margin-top: 6pt;
					margin-right: 0cm;
					margin-bottom: 0cm;
					margin-left: 0cm;
					text-align: center;
					text-indent: 18pt;
					line-height: 115%;
				"
			>
				<span lang="EN-US" style="mso-ansi-language: EN-US"
					>C???NG H??A X?? H???I CH??? NGH??A VI???T NAM</span
				><span lang="EN-US"> </span
				><span lang="EN-US" style="mso-ansi-language: EN-US"><o:p></o:p></span>
			</p>

			<p
				align="center"
				style="
					margin-top: 6pt;
					margin-right: 0cm;
					margin-bottom: 0cm;
					margin-left: 0cm;
					text-align: center;
					text-indent: 18pt;
					line-height: 115%;
				"
			>
				<span class="SpellE"
					><span lang="EN-US" style="mso-ansi-language: EN-US">?????c</span></span
				><span lang="EN-US" style="mso-ansi-language: EN-US">
					<span class="SpellE">L???p</span> - <span class="SpellE">T???</span> Do -
					<span class="SpellE">H???nh</span>
					<span class="SpellE">Ph??c</span></span
				><span lang="EN-US"> </span
				><span lang="EN-US" style="mso-ansi-language: EN-US"><o:p></o:p></span>
			</p>

			<p
				align="center"
				style="
					margin-top: 6pt;
					margin-right: 0cm;
					margin-bottom: 0cm;
					margin-left: 0cm;
					text-align: center;
					text-indent: 18pt;
					line-height: 115%;
				"
			>
				<span lang="EN-US" style="mso-ansi-language: EN-US"
					>---<span class="SpellE">oOo</span
					>---&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
				><span lang="EN-US"> </span
				><span lang="EN-US" style="mso-ansi-language: EN-US"><o:p></o:p></span>
			</p>

			<p
				align="center"
				style="
					margin-top: 6pt;
					margin-right: 0cm;
					margin-bottom: 6pt;
					margin-left: 0cm;
					text-align: center;
					text-indent: 18pt;
					line-height: 115%;
				"
			>
				<span lang="EN-US" style="mso-ansi-language: EN-US">&nbsp;&nbsp; </span
				><strong
					><span
						lang="EN-US"
						style="font-size: 16pt; line-height: 115%; mso-ansi-language: EN-US"
						>H???P ?????NG CHO THU?? PH??NG TR???</span
					></strong
				><span lang="EN-US"> </span
				><span lang="EN-US" style="mso-ansi-language: EN-US"><o:p></o:p></span>
			</p>

			<p
				align="center"
				style="
					margin-top: 6pt;
					margin-right: 0cm;
					margin-bottom: 6pt;
					margin-left: 0cm;
					text-align: center;
					text-indent: 18pt;
					line-height: 115%;
				"
			>
				<span class="SpellE"
					><strong
						><span
							lang="EN-US"
							style="
								font-size: 14pt;
								line-height: 115%;
								mso-ansi-language: EN-US;
							"
							>S???</span
						></strong
					></span
				><strong
					><span
						lang="EN-US"
						style="font-size: 14pt; line-height: 115%; mso-ansi-language: EN-US"
						>:    <span class="SpellE">  Ng??y</span>:
					</span></strong
				><span lang="EN-US" style="mso-ansi-language: EN-US"><o:p></o:p></span>
			</p>

			<p style="margin-left: 36pt">
				<span lang="EN-US" style="mso-ansi-language: EN-US"
					>-&nbsp;&nbsp; <span class="SpellE">C??n</span>
					<span class="SpellE">c???</span> <span class="SpellE">B???</span>
					<span class="SpellE">lu???t</span> <span class="SpellE">d??n</span>
					<span class="SpellE">s???</span> <span class="SpellE">c???a</span>
					<span class="SpellE">n?????c</span> <span class="SpellE">C???ng</span>
					<span class="SpellE">ho??</span> <span class="SpellE">x??</span>
					<span class="SpellE">h???i</span> <span class="SpellE">ch???</span>
					<span class="SpellE">ngh??a</span> <span class="SpellE">Vi???t</span>
					<span class="SpellE">nam</span> <span class="SpellE">c??</span>
					<span class="SpellE">hi???u</span> <span class="SpellE">l???c</span>
					<span class="SpellE">t???</span>
					<span class="SpellE">ng??y</span> 01/01/2006;</span
				><span lang="EN-US"> </span
				><span lang="EN-US" style="mso-ansi-language: EN-US"><o:p></o:p></span>
			</p>

			<p style="margin-left: 36pt">
				<span lang="EN-US" style="mso-ansi-language: EN-US"
					>-&nbsp;&nbsp; <span class="SpellE">C??n</span>
					<span class="SpellE">c???</span> <span class="SpellE">nhu</span>
					<span class="SpellE">c???u</span> <span class="SpellE">v??</span>
					<span class="SpellE">kh???</span> <span class="SpellE">n??ng</span>
					<span class="SpellE">c???a</span> <span class="SpellE">hai</span>
					<span class="SpellE">b??n</span>,</span
				><span lang="EN-US"> </span
				><span lang="EN-US" style="mso-ansi-language: EN-US"><o:p></o:p></span>
			</p>

			<p>
				<span class="SpellE"
					><em
						><span lang="EN-US" style="mso-ansi-language: EN-US">H??m</span></em
					></span
				><em
					><span lang="EN-US" style="mso-ansi-language: EN-US">
						nay, <span class="SpellE"><span class="GramE">ng??y</span></span
						><span class="GramE">
							<span class="MsoCommentReference"
								><span style="font-size: 8pt; font-style: normal"
									>&nbsp;</span
								></span
							><span class="SpellE">th??ng</span></span
						>
					</span></em
				><span class="MsoCommentReference"
					><span lang="EN-US" style="font-size: 8pt; mso-ansi-language: EN-US"
						>&nbsp;</span
					></span
				><em
					><span lang="EN-US" style="mso-ansi-language: EN-US">
						<span class="SpellE">n??m</span> <span class="SpellE">t???i</span>
						<span class="SpellE">?????a</span> <span class="SpellE">ch???</span> 
                  ${motel.name}  ${motel.address} ${motel.district} 
                  ${motel.province},
						<span class="SpellE"> ch??ng</span> <span class="SpellE">t??i</span>
						<span class="SpellE">g???m</span>
						<span class="SpellE">c??</span>:</span
					></em
				><span lang="EN-US"> </span
				><span lang="EN-US" style="mso-ansi-language: EN-US"><o:p></o:p></span>
			</p>

			<p
				style="
					margin-top: 1pt;
					margin-right: 0cm;
					margin-bottom: 1pt;
					margin-left: 0cm;
					line-height: 115%;
				"
			>
				<strong
					><u
						><span
							lang="EN-US"
							style="
								font-size: 13pt;
								line-height: 115%;
								color: #333333;
								background: white;
								mso-ansi-language: EN-US;
							"
							>B??N <span class="GramE">A :</span> B??N CHO THU??</span
						></u
					></strong
				><span lang="EN-US"> </span
				><span
					lang="EN-US"
					style="
						font-size: 11pt;
						line-height: 115%;
						font-family: 'Arial', sans-serif;
						color: black;
						mso-ansi-language: EN-US;
					"
					><o:p></o:p
				></span>
			</p>

			<p
				style="
					margin-top: 1pt;
					margin-right: 0cm;
					margin-bottom: 1pt;
					margin-left: 0cm;
					line-height: 115%;
				"
			>
				<span class="SpellE"
					><strong
						><span
							lang="EN-US"
							style="
								font-size: 13pt;
								line-height: 115%;
								color: black;
								background: white;
								mso-ansi-language: EN-US;
							"
							>??ng</span
						></strong
					></span
				><strong
					><span
						lang="EN-US"
						style="
							font-size: 13pt;
							line-height: 115%;
							color: black;
							background: white;
							mso-ansi-language: EN-US;
						"
						>/<span class="SpellE">b??</span></span
					></strong
				><span
					lang="EN-US"
					style="
						font-size: 13pt;
						line-height: 115%;
						color: black;
						background: white;
						mso-ansi-language: EN-US;
					"
					>: ${lessor?.name}
					<span class="GramE"
						> <span class="MsoCommentReference"
							><span
								style="font-size: 8pt; line-height: 115%; color: windowtext"
								>&nbsp;</span
							></span
						><strong> <span class="SpellE">N??m</span></strong></span
					><strong> <span class="SpellE">sinh</span></strong
					>: ${lessor?.dateOfBirth}</span
				><span
					lang="EN-US"
					style="
						font-size: 11pt;
						line-height: 115%;
						font-family: 'Arial', sans-serif;
						color: black;
						mso-ansi-language: EN-US;
					"
					><o:p></o:p
				></span>
			</p>

			<p
				style="
					margin-top: 1pt;
					margin-right: 0cm;
					margin-bottom: 1pt;
					margin-left: 0cm;
					line-height: 115%;
				"
			>
				<strong
					><span
						lang="EN-US"
						style="
							font-size: 13pt;
							line-height: 115%;
							color: black;
							background: white;
							mso-ansi-language: EN-US;
						"
						>CMND <span class="SpellE">s???</span></span
					></strong
				><span
					lang="EN-US"
					style="
						font-size: 13pt;
						line-height: 115%;
						color: black;
						background: white;
						mso-ansi-language: EN-US;
					"
					>: ${lessor?.citizenIdentificationNumber}</span
				><span class="MsoCommentReference"
					><span
						lang="EN-US"
						style="font-size: 8pt; line-height: 115%; mso-ansi-language: EN-US"
						>&nbsp;</span
					></span
				><span class="SpellE"
					><strong
						><span
							lang="EN-US"
							style="
								font-size: 13pt;
								line-height: 115%;
								color: black;
								background: white;
								mso-ansi-language: EN-US;
							"
							>Ng??y</span
						></strong
					></span
				><strong
					><span
						lang="EN-US"
						style="
							font-size: 13pt;
							line-height: 115%;
							color: black;
							background: white;
							mso-ansi-language: EN-US;
						"
					>
						<span class="SpellE">c???p</span>: ${lessor?.dateRange} </span
					></strong
				><span
					lang="EN-US"
					style="
						font-size: 13pt;
						line-height: 115%;
						color: black;
						background: white;
						mso-ansi-language: EN-US;
					"
				>
				</span
				><span class="MsoCommentReference"
					><span
						lang="EN-US"
						style="font-size: 8pt; line-height: 115%; mso-ansi-language: EN-US"
						>&nbsp;</span
					></span
				><span class="SpellE"
					><strong> <span
							lang="EN-US"
							style="
								font-size: 13pt;
								line-height: 115%;
								color: black;
								background: white;
								mso-ansi-language: EN-US;
							"
							>N??i</span
						></strong
					></span
				><strong
					><span
						lang="EN-US"
						style="
							font-size: 13pt;
							line-height: 115%;
							color: black;
							background: white;
							mso-ansi-language: EN-US;
						"
					>
						<span class="SpellE">c???p</span>: ${lessor?.issuedBy}</span
					></strong
				><span
					lang="EN-US"
					style="
						font-size: 13pt;
						line-height: 115%;
						color: black;
						background: white;
						mso-ansi-language: EN-US;
					"
				>
				</span
				><span
					lang="EN-US"
					style="
						font-size: 11pt;
						line-height: 115%;
						font-family: 'Arial', sans-serif;
						color: black;
						mso-ansi-language: EN-US;
					"
					><o:p></o:p
				></span>
			</p>

			<p
				style="
					margin-top: 1pt;
					margin-right: 0cm;
					margin-bottom: 1pt;
					margin-left: 0cm;
					line-height: 115%;
				"
			>
				<span class="SpellE"
					><strong
						><span
							lang="EN-US"
							style="
								font-size: 13pt;
								line-height: 115%;
								color: black;
								background: white;
								mso-ansi-language: EN-US;
							"
							>?????a</span
						></strong
					></span
				><strong
					><span
						lang="EN-US"
						style="
							font-size: 13pt;
							line-height: 115%;
							color: black;
							background: white;
							mso-ansi-language: EN-US;
						"
					>
						<span class="SpellE">ch???</span> <span class="SpellE">th?????ng</span>
						<span class="SpellE">tr??</span>:</span
					></strong
				><span
					lang="EN-US"
					style="
						font-size: 13pt;
						line-height: 115%;
						color: black;
						background: white;
						mso-ansi-language: EN-US;
					"
				>
				</span
				><a name="_msoanchor_12" id="_anchor_12"></a
				><span
					lang="EN-US"
					style="
						font-size: 11pt;
						line-height: 115%;
						font-family: 'Arial', sans-serif;
						color: black;
						mso-ansi-language: EN-US;
					"
					><o:p></o:p
				></span>
			</p>

			<p
				style="
					margin-top: 1pt;
					margin-right: 0cm;
					margin-bottom: 1pt;
					margin-left: 0cm;
					line-height: 115%;
				"
			>
				<span class="SpellE"
					><strong
						><span
							lang="EN-US"
							style="
								font-size: 13pt;
								line-height: 115%;
								color: black;
								background: white;
								mso-ansi-language: EN-US;
							"
							>??i???n</span
						></strong
					></span
				><strong
					><span
						lang="EN-US"
						style="
							font-size: 13pt;
							line-height: 115%;
							color: black;
							background: white;
							mso-ansi-language: EN-US;
						"
					>
						<span class="SpellE">tho???i</span>:</span
					></strong
				><span
					lang="EN-US"
					style="
						font-size: 13pt;
						line-height: 115%;
						color: black;
						background: white;
						mso-ansi-language: EN-US;
					"
				>
					0353370505</span
				><span lang="EN-US"> </span
				><span
					lang="EN-US"
					style="
						font-size: 11pt;
						line-height: 115%;
						font-family: 'Arial', sans-serif;
						color: black;
						mso-ansi-language: EN-US;
					"
					><o:p></o:p
				></span>
			</p>

			<p
				style="
					margin-top: 1pt;
					margin-right: 0cm;
					margin-bottom: 1pt;
					margin-left: 0cm;
					line-height: 115%;
				"
			>
				<span
					lang="EN-US"
					style="
						font-size: 13pt;
						line-height: 115%;
						color: black;
						background: white;
						mso-ansi-language: EN-US;
					"
					>&nbsp;</span
				><span lang="EN-US"> </span
				><span
					lang="EN-US"
					style="
						font-size: 11pt;
						line-height: 115%;
						font-family: 'Arial', sans-serif;
						color: black;
						mso-ansi-language: EN-US;
					"
					><o:p></o:p
				></span>
			</p>

			<p
				style="
					margin-top: 1pt;
					margin-right: 0cm;
					margin-bottom: 1pt;
					margin-left: 0cm;
					line-height: 115%;
				"
			>
				<strong
					><u
						><span
							lang="EN-US"
							style="
								font-size: 13pt;
								line-height: 115%;
								color: #333333;
								background: white;
								mso-ansi-language: EN-US;
							"
							>B??N <span class="GramE">B :</span> B??N THU??</span
						></u
					></strong
				><span lang="EN-US"> </span
				><span
					lang="EN-US"
					style="
						font-size: 11pt;
						line-height: 115%;
						font-family: 'Arial', sans-serif;
						color: black;
						mso-ansi-language: EN-US;
					"
					><o:p></o:p
				></span>
			</p>

			<p
				style="
					margin-top: 1pt;
					margin-right: 0cm;
					margin-bottom: 1pt;
					margin-left: 0cm;
					line-height: 115%;
				"
			>
				<span class="SpellE"
					><strong
						><span
							lang="EN-US"
							style="
								font-size: 13pt;
								line-height: 115%;
								color: black;
								background: white;
								mso-ansi-language: EN-US;
							"
							>??ng</span
						></strong
					></span
				><strong
					><span
						lang="EN-US"
						style="
							font-size: 13pt;
							line-height: 115%;
							color: black;
							background: white;
							mso-ansi-language: EN-US;
						"
						>/<span class="SpellE">b??</span>:</span
					></strong
				><span
					lang="EN-US"
					style="
						font-size: 13pt;
						line-height: 115%;
						color: black;
						background: white;
						mso-ansi-language: EN-US;
					"
				>
					${roomRentalDetail?.customerName}</span
				><span class="MsoCommentReference"
					><span
						lang="EN-US"
						style="font-size: 8pt; line-height: 115%; mso-ansi-language: EN-US"
						>&nbsp;</span
					></span
				><span class="SpellE"
					><strong
						><span
							lang="EN-US"
							style="
								font-size: 13pt;
								line-height: 115%;
								color: black;
								background: white;
								mso-ansi-language: EN-US;
							"
							>N??m</span
						></strong
					></span
				><strong
					><span
						lang="EN-US"
						style="
							font-size: 13pt;
							line-height: 115%;
							color: black;
							background: white;
							mso-ansi-language: EN-US;
						"
					>
						<span class="SpellE">sinh</span>:</span
					></strong
				><span
					lang="EN-US"
					style="
						font-size: 13pt;
						line-height: 115%;
						color: black;
						background: white;
						mso-ansi-language: EN-US;
					"
				>
					${roomRentalDetail?.dateOfBirth}</span
				><span lang="EN-US"> </span
				><span
					lang="EN-US"
					style="
						font-size: 11pt;
						line-height: 115%;
						font-family: 'Arial', sans-serif;
						color: black;
						mso-ansi-language: EN-US;
					"
					><o:p></o:p
				></span>
			</p>

			<p
				style="
					margin-top: 1pt;
					margin-right: 0cm;
					margin-bottom: 1pt;
					margin-left: 0cm;
					line-height: 115%;
				"
			>
				<strong
					><span
						lang="EN-US"
						style="
							font-size: 13pt;
							line-height: 115%;
							color: black;
							background: white;
							mso-ansi-language: EN-US;
						"
						>CMND <span class="SpellE">s???</span>:</span
					></strong
				><span
					lang="EN-US"
					style="
						font-size: 13pt;
						line-height: 115%;
						color: black;
						background: white;
						mso-ansi-language: EN-US;
					"
				>
					${roomRentalDetail?.citizenIdentification}</span
				><span
					lang="EN-US"
					style="
						font-size: 11pt;
						line-height: 115%;
						font-family: 'Arial', sans-serif;
						color: black;
						mso-ansi-language: EN-US;
					"
				>
				</span
				><span class="SpellE"
					><strong
						><span
							lang="EN-US"
							style="
								font-size: 13pt;
								line-height: 115%;
								color: black;
								background: white;
								mso-ansi-language: EN-US;
							"
							>Ng??y</span
						></strong
					></span
				><strong
					><span
						lang="EN-US"
						style="
							font-size: 13pt;
							line-height: 115%;
							color: black;
							background: white;
							mso-ansi-language: EN-US;
						"
					>
						<span class="SpellE">c???p</span>:</span
					></strong
				><span
					lang="EN-US"
					style="
						font-size: 13pt;
						line-height: 115%;
						color: black;
						background: white;
						mso-ansi-language: EN-US;
					"
				>
					${roomRentalDetail?.dateRange} <span class="SpellE"><strong>N??i</strong></span
					><strong> <span class="SpellE">c???p</span>:</strong>
					<span class="SpellE">H???</span>
					<span class="SpellE">Ch??</span> Minh</span
				><span lang="EN-US"> </span
				><span
					lang="EN-US"
					style="
						font-size: 11pt;
						line-height: 115%;
						font-family: 'Arial', sans-serif;
						color: black;
						mso-ansi-language: EN-US;
					"
					><o:p></o:p
				></span>
			</p>

			<p
				style="
					margin-top: 1pt;
					margin-right: 0cm;
					margin-bottom: 1pt;
					margin-left: 0cm;
					line-height: 115%;
				"
			>
				<span class="SpellE"
					><strong
						><span
							lang="EN-US"
							style="
								font-size: 13pt;
								line-height: 115%;
								color: black;
								background: white;
								mso-ansi-language: EN-US;
							"
							>?????a</span
						></strong
					></span
				><strong
					><span
						lang="EN-US"
						style="
							font-size: 13pt;
							line-height: 115%;
							color: black;
							background: white;
							mso-ansi-language: EN-US;
						"
					>
						<span class="SpellE">ch???</span> <span class="SpellE">th?????ng</span>
						<span class="SpellE">tr??</span>: </span
					></strong
				><span
					lang="EN-US"
					style="
						font-size: 13pt;
						line-height: 115%;
						color: black;
						background: white;
						mso-ansi-language: EN-US;
					"
				>
					${roomRentalDetail?.address}</span
				><span lang="EN-US"> </span
				><span
					lang="EN-US"
					style="
						font-size: 11pt;
						line-height: 115%;
						font-family: 'Arial', sans-serif;
						color: black;
						mso-ansi-language: EN-US;
					"
					><o:p></o:p
				></span>
			</p>

			<p
				style="
					margin-top: 1pt;
					margin-right: 0cm;
					margin-bottom: 1pt;
					margin-left: 0cm;
					line-height: 115%;
				"
			>
				<span class="SpellE"
					><strong
						><span
							lang="EN-US"
							style="
								font-size: 13pt;
								line-height: 115%;
								color: black;
								mso-ansi-language: EN-US;
							"
							>??i???n</span
						></strong
					></span
				><strong
					><span
						lang="EN-US"
						style="
							font-size: 13pt;
							line-height: 115%;
							color: black;
							mso-ansi-language: EN-US;
						"
					>
						<span class="SpellE">tho???i</span>:</span
					></strong
				><span
					lang="EN-US"
					style="
						font-size: 13pt;
						line-height: 115%;
						color: black;
						mso-ansi-language: EN-US;
					"
				>
					${roomRentalDetail?.phone}</span
				><span lang="EN-US"> </span
				><span
					lang="EN-US"
					style="
						font-size: 11pt;
						line-height: 115%;
						font-family: 'Arial', sans-serif;
						color: black;
						mso-ansi-language: EN-US;
					"
					><o:p></o:p
				></span>
			</p>

			<p
				style="
					margin-top: 1pt;
					margin-right: 0cm;
					margin-bottom: 1pt;
					margin-left: 0cm;
					line-height: 115%;
				"
			>
				<span
					lang="EN-US"
					style="
						font-size: 13pt;
						line-height: 115%;
						color: black;
						mso-ansi-language: EN-US;
					"
					>Hai <span class="SpellE">b??n</span> <span class="SpellE">c??ng</span>
					<span class="SpellE">th???a</span> <span class="SpellE">thu???n</span>
					<span class="SpellE">k??</span> <span class="SpellE">h???p</span>
					<span class="SpellE">?????ng</span> <span class="SpellE">v???i</span>
					<span class="SpellE">nh???ng</span> <span class="SpellE">n???i</span> dung
					<span class="SpellE">sau</span>:</span
				><span lang="EN-US"> </span
				><span
					lang="EN-US"
					style="
						font-size: 11pt;
						line-height: 115%;
						font-family: 'Arial', sans-serif;
						color: black;
						mso-ansi-language: EN-US;
					"
					><o:p></o:p
				></span>
			</p>

			<p
				style="
					margin-top: 6pt;
					margin-right: 0cm;
					margin-bottom: 6pt;
					margin-left: 0cm;
					text-indent: 18pt;
					line-height: 115%;
				"
			>
				<span class="SpellE"
					><strong
						><span lang="EN-US" style="mso-ansi-language: EN-US"
							>??i???u</span
						></strong
					></span
				><strong
					><span lang="EN-US" style="mso-ansi-language: EN-US">
						1:
					</span></strong
				><span lang="EN-US" style="mso-ansi-language: EN-US"><o:p></o:p></span>
			</p>

			<p
				class="MsoNormal"
				style="
					margin-top: 6pt;
					margin-right: 0cm;
					margin-bottom: 6pt;
					margin-left: 54pt;
					text-indent: -18pt;
					line-height: 115%;
					mso-list: l0 level1 lfo2;
					tab-stops: list 36pt;
				"
			>
				<![if !supportLists]><span
					lang="EN-US"
					style="
						font-size: 10pt;
						mso-bidi-font-size: 12pt;
						line-height: 115%;
						font-family: Symbol;
						mso-fareast-font-family: Symbol;
						mso-bidi-font-family: Symbol;
						mso-ansi-language: EN-US;
					"
					><span style="mso-list: Ignore"
						>??<span style="font: 7pt 'Times New Roman'"
							>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						</span></span
					></span
				><![endif]><span class="SpellE"
					><span
						lang="EN-US"
						style="
							mso-fareast-font-family: 'Times New Roman';
							mso-ansi-language: EN-US;
						"
						>B??n</span
					></span
				><span
					lang="EN-US"
					style="
						mso-fareast-font-family: 'Times New Roman';
						mso-ansi-language: EN-US;
					"
				>
					A <span class="SpellE">?????ng</span> ?? <span class="SpellE">cho</span>
					<span class="SpellE">b??n</span> B <span class="SpellE">thu??</span>
					<span class="SpellE">ph??ng</span> <span class="SpellE">tr???</span>
					<span class="SpellE">s???</span> ${roomRentalDetail.roomName}</span
				><span class="MsoCommentReference"
					><span
						lang="EN-US"
						style="
							font-size: 8pt;
							line-height: 115%;
							mso-fareast-font-family: 'Times New Roman';
							mso-ansi-language: EN-US;
						"
						>&nbsp;</span
					></span
				><span class="SpellE"
					><span
						lang="EN-US"
						style="
							mso-fareast-font-family: 'Times New Roman';
							mso-ansi-language: EN-US;
						"
						>thu???c</span
					></span
				><span
					lang="EN-US"
					style="
						mso-fareast-font-family: 'Times New Roman';
						mso-ansi-language: EN-US;
					"
				>
					<span class="SpellE">?????a</span> <span class="SpellE">ch???</span>: ${motel.name}
					<span class="SpellE"> ${motel.address} ${motel.district} ${motel.province}</span
				><span lang="EN-US"> </span
				><span
					lang="EN-US"
					style="
						mso-fareast-font-family: 'Times New Roman';
						mso-ansi-language: EN-US;
					"
					><o:p></o:p
				></span>
			</p>

			<p
				class="MsoNormal"
				style="
					margin-top: 6pt;
					margin-right: 0cm;
					margin-bottom: 6pt;
					margin-left: 54pt;
					text-indent: -18pt;
					line-height: 115%;
					mso-list: l0 level1 lfo2;
					tab-stops: list 36pt;
				"
			>
				<![if !supportLists]><span
					lang="EN-US"
					style="
						font-size: 10pt;
						mso-bidi-font-size: 12pt;
						line-height: 115%;
						font-family: Symbol;
						mso-fareast-font-family: Symbol;
						mso-bidi-font-family: Symbol;
						mso-ansi-language: EN-US;
					"
					><span style="mso-list: Ignore"
						>??<span style="font: 7pt 'Times New Roman'"
							>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						</span></span
					></span
				><![endif]><span class="SpellE"
					><span
						lang="EN-US"
						style="
							mso-fareast-font-family: 'Times New Roman';
							mso-ansi-language: EN-US;
						"
						>Th???i</span
					></span
				><span
					lang="EN-US"
					style="
						mso-fareast-font-family: 'Times New Roman';
						mso-ansi-language: EN-US;
					"
				>
					<span class="SpellE">h???n</span> <span class="SpellE">thu??</span>
					<span class="SpellE">ph??ng</span> <span class="SpellE">tr???</span>
					<span class="SpellE"> k???</span> <span class="SpellE">t???</span>
					<span class="SpellE">ng??y </span>
                    ${moment(roomRentalDetail.startDate, 'DD-MM-YYYY')}</span
				><span lang="EN-US"> </span
				><span
					lang="EN-US"
					style="
						mso-fareast-font-family: 'Times New Roman';
						mso-ansi-language: EN-US;
					"
					><o:p></o:p
				></span>
			</p>

			<p
				style="
					margin-top: 6pt;
					margin-right: 0cm;
					margin-bottom: 6pt;
					margin-left: 18pt;
					line-height: 115%;
				"
			>
				<span class="SpellE"
					><strong
						><span lang="EN-US" style="mso-ansi-language: EN-US"
							>??i???u</span
						></strong
					></span
				><strong
					><span lang="EN-US" style="mso-ansi-language: EN-US">
						<span class="GramE">2 :</span></span
					></strong
				><span lang="EN-US"> </span
				><span lang="EN-US" style="mso-ansi-language: EN-US"><o:p></o:p></span>
			</p>

			<p
				class="MsoNormal"
				style="
					margin-top: 6pt;
					margin-right: 0cm;
					margin-bottom: 6pt;
					margin-left: 54pt;
					text-indent: -18pt;
					line-height: 115%;
					mso-list: l2 level1 lfo4;
					tab-stops: list 36pt;
				"
			>
				<![if !supportLists]><span
					lang="EN-US"
					style="
						font-size: 10pt;
						mso-bidi-font-size: 12pt;
						line-height: 115%;
						font-family: Symbol;
						mso-fareast-font-family: Symbol;
						mso-bidi-font-family: Symbol;
						mso-ansi-language: EN-US;
					"
					><span style="mso-list: Ignore"
						>??<span style="font: 7pt 'Times New Roman'"
							>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						</span></span
					></span
				><![endif]><span class="SpellE"
					><span
						lang="EN-US"
						style="
							mso-fareast-font-family: 'Times New Roman';
							mso-ansi-language: EN-US;
						"
						>Gi??</span
					></span
				><span
					lang="EN-US"
					style="
						mso-fareast-font-family: 'Times New Roman';
						mso-ansi-language: EN-US;
					"
				>
					<span class="SpellE">ti???n</span> <span class="SpellE">thu??</span>
					<span class="SpellE">ph??ng</span> <span class="SpellE">tr???</span>
					<span class="SpellE">l?? </span> 
                    ${generatePriceToVND(+roomRentalDetail.priceRoom)}</span
				><span class="MsoCommentReference"
					><span
						lang="EN-US"
						style="
							font-size: 8pt;
							line-height: 115%;
							mso-fareast-font-family: 'Times New Roman';
							mso-ansi-language: EN-US;
						"
						>&nbsp;</span
					></span
				><span class="SpellE"
					><span
						lang="EN-US"
						style="
							mso-fareast-font-family: 'Times New Roman';
							mso-ansi-language: EN-US;
						"
						>?????ng</span
					></span
				><span
					lang="EN-US"
					style="
						mso-fareast-font-family: 'Times New Roman';
						mso-ansi-language: EN-US;
					"
					>/<span class="SpellE">th??ng</span></span
				><span lang="EN-US"> </span
				><span
					lang="EN-US"
					style="
						mso-fareast-font-family: 'Times New Roman';
						mso-ansi-language: EN-US;
					"
					><o:p></o:p
				></span>
			</p> 

			<p
				class="MsoNormal"
				style="
					margin-top: 6pt;
					margin-right: 0cm;
					margin-bottom: 6pt;
					margin-left: 54pt;
					text-indent: -18pt;
					line-height: 115%;
					mso-list: l3 level1 lfo6;
					tab-stops: list 36pt;
				"
			>
				<![if !supportLists]><span
					lang="EN-US"
					style="
						font-size: 10pt;
						mso-bidi-font-size: 12pt;
						line-height: 115%;
						font-family: Symbol;
						mso-fareast-font-family: Symbol;
						mso-bidi-font-family: Symbol;
						mso-ansi-language: EN-US;
					"
					><span style="mso-list: Ignore"
						>??<span style="font: 7pt 'Times New Roman'"
							>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						</span></span
					></span
				><![endif]><span class="SpellE"
					><span
						lang="EN-US"
						style="
							mso-fareast-font-family: 'Times New Roman';
							mso-ansi-language: EN-US;
						"
						>Ti???n</span
					></span
				><span
					lang="EN-US"
					style="
						mso-fareast-font-family: 'Times New Roman';
						mso-ansi-language: EN-US;
					"
				>
					<span class="SpellE">thu??</span> <span class="SpellE">nh??</span>
					<span class="SpellE">b??n</span> B <span class="SpellE">thanh</span>
					<span class="SpellE">to??n</span> <span class="SpellE">cho</span>
					<span class="SpellE">b??n</span> A <span class="SpellE">t???</span>
					<span class="SpellE">ng??y</span> 1-5 <span class="SpellE">T??y</span>
					<span class="SpellE">h??ng</span>
					<span class="SpellE">th??ng</span>.</span
				><span lang="EN-US"> </span
				><span
					lang="EN-US"
					style="
						mso-fareast-font-family: 'Times New Roman';
						mso-ansi-language: EN-US;
					"
					><o:p></o:p
				></span>
			</p>

			<p
				class="MsoNormal"
				style="
					margin-top: 6pt;
					margin-right: 0cm;
					margin-bottom: 6pt;
					margin-left: 54pt;
					text-indent: -18pt;
					line-height: 115%;
					mso-list: l3 level1 lfo6;
					tab-stops: list 36pt;
				"
			>
				<![if !supportLists]><span
					lang="EN-US"
					style="
						font-size: 10pt;
						mso-bidi-font-size: 12pt;
						line-height: 115%;
						font-family: Symbol;
						mso-fareast-font-family: Symbol;
						mso-bidi-font-family: Symbol;
						mso-ansi-language: EN-US;
					"
					><span style="mso-list: Ignore"
						>??<span style="font: 7pt 'Times New Roman'"
							>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						</span></span
					></span
				><![endif]><span class="SpellE"
					><span
						lang="EN-US"
						style="
							mso-fareast-font-family: 'Times New Roman';
							mso-ansi-language: EN-US;
						"
						>B??n</span
					></span
				><span
					lang="EN-US"
					style="
						mso-fareast-font-family: 'Times New Roman';
						mso-ansi-language: EN-US;
					"
				>
					B <span class="SpellE">?????t</span> <span class="SpellE">ti???n</span>
					<span class="SpellE">th???</span> <span class="SpellE">ch??n</span>
					<span class="SpellE">tr?????c </span> 
                    ${generatePriceToVND(+roomRentalDetail.deposit)}</span
				><span class="MsoCommentReference"
					><span
						lang="EN-US"
						style="
							font-size: 8pt;
							line-height: 115%;
							mso-fareast-font-family: 'Times New Roman';
							mso-ansi-language: EN-US;
						"
						>&nbsp;</span
					></span
				><span class="SpellE"
					><span
						lang="EN-US"
						style="
							mso-fareast-font-family: 'Times New Roman';
							mso-ansi-language: EN-US;
						"
						>?????ng</span
					></span
				><span
					lang="EN-US"
					style="
						mso-fareast-font-family: 'Times New Roman';
						mso-ansi-language: EN-US;
					"
					>&nbsp;</span
				><span lang="EN-US"> </span
				><span
					lang="EN-US"
					style="
						mso-fareast-font-family: 'Times New Roman';
						mso-ansi-language: EN-US;
					"
					><o:p></o:p
				></span>
			</p>

			<p
				style="
					margin-top: 6pt;
					margin-right: 0cm;
					margin-bottom: 6pt;
					margin-left: 54pt;
					line-height: 115%;
				"
			>
				 <span class="MsoCommentReference"
					><span
						lang="EN-US"
						style="font-size: 8pt; line-height: 115%; mso-ansi-language: EN-US"
						>&nbsp;</span
					></span
				><span class="SpellE"
					><span lang="EN-US" style="mso-ansi-language: EN-US">cho</span></span
				><span lang="EN-US" style="mso-ansi-language: EN-US">
					<span class="SpellE">b??n</span> A.</span
				><span lang="EN-US"> </span
				><span lang="EN-US" style="mso-ansi-language: EN-US"><o:p></o:p></span>
			</p>

			<p
				style="
					margin-top: 6pt;
					margin-right: 0cm;
					margin-bottom: 6pt;
					margin-left: 54pt;
					line-height: 115%;
				"
			>
				<span class="SpellE"
					><span lang="EN-US" style="mso-ansi-language: EN-US">Ti???n</span></span
				><span lang="EN-US" style="mso-ansi-language: EN-US">
					<span class="SpellE">th???</span> <span class="SpellE">ch??n</span>
					<span class="SpellE">s???</span> <span class="SpellE">???????c</span>
					<span class="SpellE">tr???</span> <span class="SpellE">l???i</span>
					<span class="SpellE">?????y</span> <span class="SpellE">?????</span>
					<span class="SpellE">cho</span> <span class="SpellE">b??n</span>
					<span class="SpellE">thu??</span> (<span class="SpellE">B??n</span> B)
					<span class="SpellE">khi</span> <span class="SpellE">h???t</span>
					<span class="SpellE">h???p</span> <span class="SpellE">?????ng</span>
					<span class="SpellE">thu??</span> <span class="SpellE">ph??ng</span>
					<span class="SpellE">tr???</span> <span class="SpellE">n??u</span>
					<span class="SpellE">tr??n</span> <span class="SpellE">v??</span>
					<span class="SpellE">thanh</span> <span class="SpellE">to??n</span>
					<span class="SpellE">?????y</span> <span class="SpellE">?????</span>
					<span class="SpellE">ti???n</span> <span class="SpellE">??i???n</span>,
					<span class="SpellE">n?????c</span>, <span class="SpellE">ph??</span>
					<span class="SpellE">d???ch</span> <span class="SpellE">v???</span>
					<span class="SpellE">v??</span> <span class="SpellE">c??c</span>
					<span class="SpellE">kho???n</span> <span class="SpellE">kh??c</span>
					<span class="SpellE">li??n</span>
					<span class="SpellE">quan</span>.</span
				><span lang="EN-US"> </span
				><span lang="EN-US" style="mso-ansi-language: EN-US"><o:p></o:p></span>
			</p>

			<p
				class="MsoNormal"
				style="
					margin-top: 6pt;
					margin-right: 0cm;
					margin-bottom: 6pt;
					margin-left: 54pt;
					text-indent: -18pt;
					line-height: 115%;
					mso-list: l4 level1 lfo8;
					tab-stops: list 36pt;
				"
			>
				<![if !supportLists]><span
					lang="EN-US"
					style="
						font-size: 10pt;
						mso-bidi-font-size: 12pt;
						line-height: 115%;
						font-family: Symbol;
						mso-fareast-font-family: Symbol;
						mso-bidi-font-family: Symbol;
						mso-ansi-language: EN-US;
					"
					><span style="mso-list: Ignore"
						>??<span style="font: 7pt 'Times New Roman'"
							>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						</span></span
					></span
				><![endif]><span class="SpellE"
					><span
						lang="EN-US"
						style="
							mso-fareast-font-family: 'Times New Roman';
							mso-ansi-language: EN-US;
						"
						>B??n</span
					></span
				><span
					lang="EN-US"
					style="
						mso-fareast-font-family: 'Times New Roman';
						mso-ansi-language: EN-US;
					"
				>
					B <span class="SpellE">ng??ng</span> <span class="SpellE">h???p</span>
					<span class="SpellE">?????ng</span> <span class="SpellE">tr?????c</span>
					<span class="SpellE">th???i</span> <span class="SpellE">h???n</span>
					<span class="SpellE">th??</span> <span class="SpellE">ph???i</span>
					<span class="SpellE">ch???u</span> <span class="SpellE">m???t</span>
					<span class="SpellE">ti???n</span> <span class="SpellE">th???</span>
					<span class="SpellE">ch??n</span>.</span
				><span lang="EN-US"> </span
				><span
					lang="EN-US"
					style="
						mso-fareast-font-family: 'Times New Roman';
						mso-ansi-language: EN-US;
					"
					><o:p></o:p
				></span>
			</p>

			<p
				class="MsoNormal"
				style="
					margin-top: 6pt;
					margin-right: 0cm;
					margin-bottom: 6pt;
					margin-left: 54pt;
					text-indent: -18pt;
					line-height: 115%;
					mso-list: l4 level1 lfo8;
					tab-stops: list 36pt;
				"
			>
				<![if !supportLists]><span
					lang="EN-US"
					style="
						font-size: 10pt;
						mso-bidi-font-size: 12pt;
						line-height: 115%;
						font-family: Symbol;
						mso-fareast-font-family: Symbol;
						mso-bidi-font-family: Symbol;
						mso-ansi-language: EN-US;
					"
					><span style="mso-list: Ignore"
						>??<span style="font: 7pt 'Times New Roman'"
							>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						</span></span
					></span
				><![endif]><span class="SpellE"
					><span
						lang="EN-US"
						style="
							mso-fareast-font-family: 'Times New Roman';
							mso-ansi-language: EN-US;
						"
						>B??n</span
					></span
				><span
					lang="EN-US"
					style="
						mso-fareast-font-family: 'Times New Roman';
						mso-ansi-language: EN-US;
					"
				>
					A <span class="SpellE">ng??ng</span> <span class="SpellE">h???p</span>
					<span class="SpellE">?????ng</span> (<span class="SpellE">l???y</span>
					<span class="SpellE">l???i</span> <span class="SpellE">nh??</span>)
					<span class="SpellE">tr?????c</span> <span class="SpellE">th???i</span>
					<span class="SpellE">h???n</span> <span class="SpellE">th??</span>
					<span class="SpellE">b???i</span> <span class="SpellE">th?????ng</span>
					<span class="SpellE">g???p</span> <span class="SpellE">????i</span>
					<span class="SpellE">s???</span> <span class="SpellE">ti???n</span>
					<span class="SpellE">b??n</span> B <span class="SpellE">????</span>
					<span class="SpellE">th???</span>
					<span class="SpellE">ch??n</span>.</span
				><span lang="EN-US"> </span
				><span
					lang="EN-US"
					style="
						mso-fareast-font-family: 'Times New Roman';
						mso-ansi-language: EN-US;
					"
					><o:p></o:p
				></span>
			</p>

			<p
				style="
					margin-top: 6pt;
					margin-right: 0cm;
					margin-bottom: 6pt;
					margin-left: 18pt;
					line-height: 115%;
				"
			>
				<span class="SpellE"
					><strong
						><span lang="EN-US" style="mso-ansi-language: EN-US"
							>??i???u</span
						></strong
					></span
				><strong
					><span lang="EN-US" style="mso-ansi-language: EN-US">
						<span class="GramE">3 :</span></span
					></strong
				><span lang="EN-US" style="mso-ansi-language: EN-US">
					<span class="SpellE">Tr??ch</span> <span class="SpellE">nhi???m</span>
					<span class="SpellE">b??n</span> A.</span
				><span lang="EN-US"> </span
				><span lang="EN-US" style="mso-ansi-language: EN-US"><o:p></o:p></span>
			</p>

			<p
				class="MsoNormal"
				style="
					margin-top: 6pt;
					margin-right: 0cm;
					margin-bottom: 6pt;
					margin-left: 54pt;
					text-indent: -18pt;
					line-height: 115%;
					mso-list: l1 level1 lfo10;
					tab-stops: list 36pt;
				"
			>
				<![if !supportLists]><span
					lang="EN-US"
					style="
						font-size: 10pt;
						mso-bidi-font-size: 12pt;
						line-height: 115%;
						font-family: Symbol;
						mso-fareast-font-family: Symbol;
						mso-bidi-font-family: Symbol;
						mso-ansi-language: EN-US;
					"
					><span style="mso-list: Ignore"
						>??<span style="font: 7pt 'Times New Roman'"
							>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						</span></span
					></span
				><![endif]><span
					lang="EN-US"
					style="
						mso-fareast-font-family: 'Times New Roman';
						mso-ansi-language: EN-US;
					"
					>Giao <span class="SpellE">ph??ng</span>
					<span class="SpellE">tr???</span>, <span class="SpellE">trang</span>
					<span class="SpellE">thi???t</span> <span class="SpellE">b???</span>
					<span class="SpellE">trong</span> <span class="SpellE">ph??ng</span>
					<span class="SpellE">tr???</span> <span class="SpellE">cho</span>
					<span class="SpellE">b??n</span> B <span class="SpellE">????ng</span>
					<span class="SpellE">ng??y</span> <span class="SpellE">k??</span>
					<span class="SpellE">h???p</span>
					<span class="SpellE">?????ng</span>.</span
				><span lang="EN-US"> </span
				><span
					lang="EN-US"
					style="
						mso-fareast-font-family: 'Times New Roman';
						mso-ansi-language: EN-US;
					"
					><o:p></o:p
				></span>
			</p>

			<p
				class="MsoNormal"
				style="
					margin-top: 6pt;
					margin-right: 0cm;
					margin-bottom: 6pt;
					margin-left: 54pt;
					text-indent: -18pt;
					line-height: 115%;
					mso-list: l1 level1 lfo10;
					tab-stops: list 36pt;
				"
			>
				<![if !supportLists]><span
					lang="EN-US"
					style="
						font-size: 10pt;
						mso-bidi-font-size: 12pt;
						line-height: 115%;
						font-family: Symbol;
						mso-fareast-font-family: Symbol;
						mso-bidi-font-family: Symbol;
						mso-ansi-language: EN-US;
					"
					><span style="mso-list: Ignore"
						>??<span style="font: 7pt 'Times New Roman'"
							>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						</span></span
					></span
				><![endif]><span class="SpellE"
					><span
						lang="EN-US"
						style="
							mso-fareast-font-family: 'Times New Roman';
							mso-ansi-language: EN-US;
						"
						>H?????ng</span
					></span
				><span
					lang="EN-US"
					style="
						mso-fareast-font-family: 'Times New Roman';
						mso-ansi-language: EN-US;
					"
				>
					<span class="SpellE">d???n</span> <span class="SpellE">b??n</span> B
					<span class="SpellE">ch???p</span> <span class="SpellE">h??nh</span>
					<span class="SpellE">????ng</span> <span class="SpellE">c??c</span>
					<span class="SpellE">quy</span> <span class="SpellE">?????nh</span>
					<span class="SpellE">c???a</span> <span class="SpellE">?????a</span>
					<span class="SpellE">ph????ng</span>, <span class="SpellE">ho??n</span>
					<span class="SpellE">t???t</span> <span class="SpellE">m???i</span>
					<span class="SpellE">th???</span> <span class="SpellE">t???c</span>
					<span class="SpellE">gi???y</span> <span class="SpellE">t???</span>
					<span class="SpellE">????ng</span> <span class="SpellE">k??</span>
					<span class="SpellE">t???m</span> <span class="SpellE">tr??</span>
					<span class="SpellE">cho</span>
					<span class="SpellE">b??n</span> B.</span
				><span lang="EN-US"> </span
				><span
					lang="EN-US"
					style="
						mso-fareast-font-family: 'Times New Roman';
						mso-ansi-language: EN-US;
					"
					><o:p></o:p
				></span>
			</p>

			<p
				style="
					margin-top: 6pt;
					margin-right: 0cm;
					margin-bottom: 6pt;
					margin-left: 18pt;
					line-height: 115%;
				"
			>
				<span lang="EN-US" style="mso-ansi-language: EN-US">&nbsp;</span
				><span lang="EN-US"> </span
				><span lang="EN-US" style="mso-ansi-language: EN-US"><o:p></o:p></span>
			</p>

			<p
				style="
					margin-top: 6pt;
					margin-right: 0cm;
					margin-bottom: 6pt;
					margin-left: 18pt;
					line-height: 115%;
				"
			>
				<span class="SpellE"
					><strong
						><span lang="EN-US" style="mso-ansi-language: EN-US"
							>??i???u</span
						></strong
					></span
				><strong
					><span lang="EN-US" style="mso-ansi-language: EN-US">
						<span class="GramE">4 :</span></span
					></strong
				><span lang="EN-US" style="mso-ansi-language: EN-US">
					<span class="SpellE">Tr??ch</span> <span class="SpellE">nhi???m</span>
					<span class="SpellE">b??n</span> B.</span
				><span lang="EN-US"> </span
				><span lang="EN-US" style="mso-ansi-language: EN-US"><o:p></o:p></span>
			</p>

			<p
				class="MsoNormal"
				style="
					margin-top: 6pt;
					margin-right: 0cm;
					margin-bottom: 6pt;
					margin-left: 54pt;
					text-indent: -18pt;
					line-height: 115%;
					mso-list: l5 level1 lfo12;
					tab-stops: list 36pt;
				"
			>
				<![if !supportLists]><span
					lang="EN-US"
					style="
						font-size: 10pt;
						mso-bidi-font-size: 12pt;
						line-height: 115%;
						font-family: Symbol;
						mso-fareast-font-family: Symbol;
						mso-bidi-font-family: Symbol;
						mso-ansi-language: EN-US;
					"
					><span style="mso-list: Ignore"
						>??<span style="font: 7pt 'Times New Roman'"
							>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						</span></span
					></span
				><![endif]><span class="SpellE"
					><span
						lang="EN-US"
						style="
							mso-fareast-font-family: 'Times New Roman';
							mso-ansi-language: EN-US;
						"
						>Tr???</span
					></span
				><span
					lang="EN-US"
					style="
						mso-fareast-font-family: 'Times New Roman';
						mso-ansi-language: EN-US;
					"
				>
					<span class="SpellE">ti???n</span> <span class="SpellE">thu??</span>
					<span class="SpellE">ph??ng</span> <span class="SpellE">tr???</span>
					<span class="SpellE">h??ng</span> <span class="SpellE">th??ng</span>
					<span class="SpellE">theo</span> <span class="SpellE">h???p</span>
					<span class="SpellE">?????ng</span>.</span
				><span lang="EN-US"> </span
				><span
					lang="EN-US"
					style="
						mso-fareast-font-family: 'Times New Roman';
						mso-ansi-language: EN-US;
					"
					><o:p></o:p
				></span>
			</p>

			<p
				class="MsoNormal"
				style="
					margin-top: 6pt;
					margin-right: 0cm;
					margin-bottom: 6pt;
					margin-left: 54pt;
					text-indent: -18pt;
					line-height: 115%;
					mso-list: l5 level1 lfo12;
					tab-stops: list 36pt;
				"
			>
				<![if !supportLists]><span
					lang="EN-US"
					style="
						font-size: 10pt;
						mso-bidi-font-size: 12pt;
						line-height: 115%;
						font-family: Symbol;
						mso-fareast-font-family: Symbol;
						mso-bidi-font-family: Symbol;
						mso-ansi-language: EN-US;
					"
					><span style="mso-list: Ignore"
						>??<span style="font: 7pt 'Times New Roman'"
							>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						</span></span
					></span
				><![endif]><span class="SpellE"
					><span
						lang="EN-US"
						style="
							mso-fareast-font-family: 'Times New Roman';
							mso-ansi-language: EN-US;
						"
						>S???</span
					></span
				><span
					lang="EN-US"
					style="
						mso-fareast-font-family: 'Times New Roman';
						mso-ansi-language: EN-US;
					"
				>
					<span class="SpellE">d???ng</span> <span class="SpellE">????ng</span>
					<span class="SpellE">m???c</span> <span class="SpellE">????ch</span>
					<span class="SpellE">thu??</span> <span class="SpellE">ph??ng</span>
					<span class="SpellE">tr???</span>, <span class="SpellE">khi</span>
					<span class="SpellE">c???n</span> <span class="SpellE">s???a</span>
					<span class="SpellE">ch???a</span>, <span class="SpellE">c???i</span>
					<span class="SpellE">t???o</span> <span class="SpellE">theo</span>
					<span class="SpellE">y??u</span> <span class="SpellE">c???u</span>
					<span class="SpellE">s???</span> <span class="SpellE">d???ng</span>
					<span class="SpellE">ri??ng</span> <span class="SpellE">ph???i</span>
					<span class="SpellE">???????c</span> <span class="SpellE">s???</span>
					<span class="SpellE">?????ng</span> ?? <span class="SpellE">c???a</span>
					<span class="SpellE">b??n</span> A.</span
				><span lang="EN-US"> </span
				><span
					lang="EN-US"
					style="
						mso-fareast-font-family: 'Times New Roman';
						mso-ansi-language: EN-US;
					"
					><o:p></o:p
				></span>
			</p>

			<p
				class="MsoNormal"
				style="
					margin-top: 6pt;
					margin-right: 0cm;
					margin-bottom: 6pt;
					margin-left: 54pt;
					text-indent: -18pt;
					line-height: 115%;
					mso-list: l5 level1 lfo12;
					tab-stops: list 36pt;
				"
			>
				<![if !supportLists]><span
					lang="EN-US"
					style="
						font-size: 10pt;
						mso-bidi-font-size: 12pt;
						line-height: 115%;
						font-family: Symbol;
						mso-fareast-font-family: Symbol;
						mso-bidi-font-family: Symbol;
						mso-ansi-language: EN-US;
					"
					><span style="mso-list: Ignore"
						>??<span style="font: 7pt 'Times New Roman'"
							>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						</span></span
					></span
				><![endif]><span class="SpellE"
					><span
						lang="EN-US"
						style="
							mso-fareast-font-family: 'Times New Roman';
							mso-ansi-language: EN-US;
						"
						>?????</span
					></span
				><span
					lang="EN-US"
					style="
						mso-fareast-font-family: 'Times New Roman';
						mso-ansi-language: EN-US;
					"
				>
					<span class="SpellE">?????t</span> <span class="SpellE">trang</span>
					<span class="SpellE">thi???t</span> <span class="SpellE">b???</span>
					<span class="SpellE">trong</span> <span class="SpellE">ph??ng</span>
					<span class="SpellE">tr???</span> <span class="SpellE">ph???i</span>
					<span class="SpellE">c??</span> <span class="SpellE">tr??ch</span>
					<span class="SpellE">nhi???m</span> <span class="SpellE">b???o</span>
					<span class="SpellE">qu???n</span> <span class="SpellE">c???n</span>
					<span class="SpellE">th???n</span> <span class="SpellE">kh??ng</span>
					<span class="SpellE">l??m</span> <span class="SpellE">h??</span>
					<span class="SpellE">h???ng</span> <span class="SpellE">m???t</span>
					<span class="SpellE">m??t</span>.</span
				><span lang="EN-US"> </span
				><span
					lang="EN-US"
					style="
						mso-fareast-font-family: 'Times New Roman';
						mso-ansi-language: EN-US;
					"
					><o:p></o:p
				></span>
			</p>

			<p
				style="
					margin-top: 6pt;
					margin-right: 0cm;
					margin-bottom: 6pt;
					margin-left: 18pt;
					line-height: 115%;
				"
			>
				<span class="SpellE"
					><strong
						><span lang="EN-US" style="mso-ansi-language: EN-US"
							>??i???u</span
						></strong
					></span
				><strong
					><span lang="EN-US" style="mso-ansi-language: EN-US">
						5:</span
					></strong
				><span lang="EN-US" style="mso-ansi-language: EN-US">
					<span class="SpellE">??i???u</span> <span class="SpellE">kho???n</span>
					<span class="SpellE">chung</span>.</span
				><span lang="EN-US"> </span
				><span lang="EN-US" style="mso-ansi-language: EN-US"><o:p></o:p></span>
			</p>

			<p
				class="MsoNormal"
				style="
					margin-top: 6pt;
					margin-right: 0cm;
					margin-bottom: 6pt;
					margin-left: 54pt;
					text-indent: -18pt;
					line-height: 115%;
					mso-list: l6 level1 lfo14;
					tab-stops: list 36pt;
				"
			>
				<![if !supportLists]><span
					lang="EN-US"
					style="
						font-size: 10pt;
						mso-bidi-font-size: 12pt;
						line-height: 115%;
						font-family: Symbol;
						mso-fareast-font-family: Symbol;
						mso-bidi-font-family: Symbol;
						mso-ansi-language: EN-US;
					"
					><span style="mso-list: Ignore"
						>??<span style="font: 7pt 'Times New Roman'"
							>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						</span></span
					></span
				><![endif]><span class="SpellE"
					><span
						lang="EN-US"
						style="
							mso-fareast-font-family: 'Times New Roman';
							mso-ansi-language: EN-US;
						"
						>B??n</span
					></span
				><span
					lang="EN-US"
					style="
						mso-fareast-font-family: 'Times New Roman';
						mso-ansi-language: EN-US;
					"
				>
					A <span class="SpellE">v??</span> <span class="SpellE">b??n</span> B
					<span class="SpellE">th???c</span> <span class="SpellE">hi???n</span>
					<span class="SpellE">????ng</span> <span class="SpellE">c??c</span>
					<span class="SpellE">??i???u</span> <span class="SpellE">kho???n</span>
					<span class="SpellE">ghi</span> <span class="SpellE">trong</span>
					<span class="SpellE">h???p</span>
					<span class="SpellE">?????ng</span>.</span
				><span lang="EN-US"> </span
				><span
					lang="EN-US"
					style="
						mso-fareast-font-family: 'Times New Roman';
						mso-ansi-language: EN-US;
					"
					><o:p></o:p
				></span>
			</p>

			<p
				class="MsoNormal"
				style="
					margin-top: 6pt;
					margin-right: 0cm;
					margin-bottom: 6pt;
					margin-left: 54pt;
					text-indent: -18pt;
					line-height: 115%;
					mso-list: l6 level1 lfo14;
					tab-stops: list 36pt;
				"
			>
				<![if !supportLists]><span
					lang="EN-US"
					style="
						font-size: 10pt;
						mso-bidi-font-size: 12pt;
						line-height: 115%;
						font-family: Symbol;
						mso-fareast-font-family: Symbol;
						mso-bidi-font-family: Symbol;
						mso-ansi-language: EN-US;
					"
					><span style="mso-list: Ignore"
						>??<span style="font: 7pt 'Times New Roman'"
							>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						</span></span
					></span
				><![endif]><span class="SpellE"
					><span
						lang="EN-US"
						style="
							mso-fareast-font-family: 'Times New Roman';
							mso-ansi-language: EN-US;
						"
						>Tr?????ng</span
					></span
				><span
					lang="EN-US"
					style="
						mso-fareast-font-family: 'Times New Roman';
						mso-ansi-language: EN-US;
					"
				>
					<span class="SpellE">h???p</span> <span class="SpellE">c??</span>
					<span class="SpellE">tranh</span> <span class="SpellE">ch???p</span>
					<span class="SpellE">ho???c</span> <span class="SpellE">m???t</span>
					<span class="SpellE">b??n</span> vi <span class="SpellE">ph???m</span>
					<span class="SpellE">h???p</span> <span class="SpellE">?????ng</span>
					<span class="SpellE">th??</span> <span class="SpellE">hai</span>
					<span class="SpellE">b??n</span> <span class="SpellE">c??ng</span>
					<span class="SpellE">nhau</span> <span class="SpellE">b??n</span>
					<span class="SpellE">b???c</span> <span class="SpellE">gi???i</span>
					<span class="SpellE">quy???t</span>, <span class="SpellE">n???u</span>
					<span class="SpellE">kh??ng</span> <span class="SpellE">gi???i</span>
					<span class="SpellE">quy???t</span> <span class="SpellE">???????c</span>
					<span class="SpellE">th??</span> <span class="SpellE">y??u</span>
					<span class="SpellE">c???u</span> <span class="SpellE">c??</span>
					<span class="SpellE">quan</span> <span class="SpellE">c??</span>
					<span class="SpellE">th???m</span> <span class="SpellE">quy???n</span>
					<span class="SpellE">gi???i</span>
					<span class="SpellE">quy???t</span>.</span
				><span lang="EN-US"> </span
				><span
					lang="EN-US"
					style="
						mso-fareast-font-family: 'Times New Roman';
						mso-ansi-language: EN-US;
					"
					><o:p></o:p
				></span>
			</p>

			<p
				class="MsoNormal"
				style="
					margin-top: 6pt;
					margin-right: 0cm;
					margin-bottom: 6pt;
					margin-left: 54pt;
					text-indent: -18pt;
					line-height: 115%;
					mso-list: l6 level1 lfo14;
					tab-stops: list 36pt;
				"
			>
				<![if !supportLists]><span
					lang="EN-US"
					style="
						font-size: 10pt;
						mso-bidi-font-size: 12pt;
						line-height: 115%;
						font-family: Symbol;
						mso-fareast-font-family: Symbol;
						mso-bidi-font-family: Symbol;
						mso-ansi-language: EN-US;
					"
					><span style="mso-list: Ignore"
						>??<span style="font: 7pt 'Times New Roman'"
							>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
						</span></span
					></span
				><![endif]><span class="SpellE"
					><span
						lang="EN-US"
						style="
							mso-fareast-font-family: 'Times New Roman';
							mso-ansi-language: EN-US;
						"
						>H???p</span
					></span
				><span
					lang="EN-US"
					style="
						mso-fareast-font-family: 'Times New Roman';
						mso-ansi-language: EN-US;
					"
				>
					<span class="SpellE">?????ng</span> <span class="SpellE">???????c</span>
					<span class="SpellE">l???p</span> <span class="SpellE">th??nh</span>
					<span class="SpellE">hai</span> (02) <span class="SpellE">b???n</span>
					<span class="SpellE">c??</span> <span class="SpellE">gi??</span>
					<span class="SpellE">tr???</span> <span class="SpellE">ngang</span>
					<span class="SpellE">nhau</span>, <span class="SpellE">m???i</span>
					<span class="SpellE">b??n</span> <span class="SpellE">gi???</span>
					<span class="SpellE">m???t</span> (01)
					<span class="SpellE">b???n</span></span
				><span lang="EN-US"> </span
				><span
					lang="EN-US"
					style="
						mso-fareast-font-family: 'Times New Roman';
						mso-ansi-language: EN-US;
					"
					><o:p></o:p
				></span>
			</p>

			<p
				style="
					margin-top: 6pt;
					margin-right: 0cm;
					margin-bottom: 6pt;
					margin-left: 18pt;
					line-height: 115%;
				"
			>
				<span lang="EN-US" style="mso-ansi-language: EN-US">&nbsp;</span
				><span lang="EN-US"> </span
				><span lang="EN-US" style="mso-ansi-language: EN-US"><o:p></o:p></span>
			</p>

			<p
				align="right"
				style="
					margin-top: 6pt;
					margin-right: 0cm;
					margin-bottom: 6pt;
					margin-left: 18pt;
					text-align: right;
					line-height: 115%;
				"
			>
				<span class="SpellE"
					><span lang="EN-US" style="mso-ansi-language: EN-US">H??</span></span
				><span lang="EN-US" style="mso-ansi-language: EN-US">
					<span class="SpellE">N???i</span>, <span class="SpellE">ng??y</span>
					<span style="mso-spacerun: yes">  </span></span
				><span class="MsoCommentReference"
					><span
						lang="EN-US"
						style="font-size: 8pt; line-height: 115%; mso-ansi-language: EN-US"
						>&nbsp;</span
					></span
				><span class="SpellE"
					><span lang="EN-US" style="mso-ansi-language: EN-US"
						>th??ng</span
					></span
				><span lang="EN-US" style="mso-ansi-language: EN-US">
					<span style="mso-spacerun: yes">  </span></span
				><span class="MsoCommentReference"
					><span
						lang="EN-US"
						style="font-size: 8pt; line-height: 115%; mso-ansi-language: EN-US"
						>&nbsp;</span
					></span
				><span class="SpellE"
					><span lang="EN-US" style="mso-ansi-language: EN-US">n??m</span></span
				><span lang="EN-US" style="mso-ansi-language: EN-US"> <o:p></o:p></span>
			</p>

			<p
				style="
					margin-top: 6pt;
					margin-right: 0cm;
					margin-bottom: 6pt;
					margin-left: 18pt;
					line-height: 115%;
				"
			>
				<strong
					><span
						lang="EN-US"
						style="font-size: 14pt; line-height: 115%; mso-ansi-language: EN-US"
						>&nbsp;</span
					></strong
				><span lang="EN-US"> </span
				><span lang="EN-US" style="mso-ansi-language: EN-US"><o:p></o:p></span>
			</p>

			<p
				align="center"
				style="
					margin-top: 6pt;
					margin-right: 0cm;
					margin-bottom: 6pt;
					margin-left: 18pt;
					text-align: center;
					line-height: 115%;
				"
			>
				<strong
					><span
						lang="EN-US"
						style="font-size: 14pt; line-height: 115%; mso-ansi-language: EN-US"
						>B??N A&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
						&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
						&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
						&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
						&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; B??N B</span
					></strong
				><span lang="EN-US"> </span
				><span lang="EN-US" style="mso-ansi-language: EN-US"><o:p></o:p></span>
			</p>

			<p
				align="center"
				style="
					margin-top: 6pt;
					margin-right: 0cm;
					margin-bottom: 6pt;
					margin-left: 18pt;
					text-align: center;
					line-height: 115%;
				"
			>
				<span lang="EN-US" style="mso-ansi-language: EN-US">&nbsp;</span
				><span lang="EN-US"> </span
				><span lang="EN-US" style="mso-ansi-language: EN-US"><o:p></o:p></span>
			</p>

			<p
				style="
					margin-top: 6pt;
					margin-right: 0cm;
					margin-bottom: 6pt;
					margin-left: 18pt;
					line-height: 115%;
				"
			>
				<span lang="EN-US" style="mso-ansi-language: EN-US">&nbsp;</span
				><span lang="EN-US"> </span
				><span lang="EN-US" style="mso-ansi-language: EN-US"><o:p></o:p></span>
			</p>

			<p
				style="
					margin-top: 6pt;
					margin-right: 0cm;
					margin-bottom: 6pt;
					margin-left: 0cm;
					text-indent: 36pt;
					line-height: 115%;
				"
			>
				<strong
					><span lang="EN-US" style="mso-ansi-language: EN-US"
						>${lessor?.name?.toLocaleUpperCase()}</span
					></strong
				><span lang="EN-US" style="color: red; mso-ansi-language: EN-US"
					>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
					&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;<span
						style="mso-tab-count: 3"
						> </span
					><span class="GramE">
						&nbsp;<strong><span style="color: black">
                        ${roomRentalDetail?.customerName.toLocaleUpperCase()}</span></strong></span
					></span
				> 
			</p>
		</div>
	</body>
</html>
`;
    const source =
        'data:application/vnd.ms-word;charset=utf-8,' +
        encodeURIComponent(sourceHTML);
    const fileDownload = document.createElement('a');
    document.body.appendChild(fileDownload);
    fileDownload.href = source;
    fileDownload.download = 'HDTT.doc';
    fileDownload.click();
    document.body.removeChild(fileDownload);
};

export { generatePriceToVND, useGetParam, exportHtmlToWord };
