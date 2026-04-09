/**
 * 구글 시트에 이메일 데이터를 기록하기 위한 Google Apps Script 코드입니다.
 * 
 * [설치 방법]
 * 1. 구글 드라이브에서 새로운 'Google 스프레드시트'를 만듭니다.
 * 2. 상단 메뉴에서 '확장 프로그램' -> 'Apps Script'를 클릭합니다.
 * 3. 열린 에디터의 기존 코드를 모두 지우고 이 파일의 내용을 붙여넣습니다.
 * 4. 상단 메뉴의 '배포' -> '새 배포'를 클릭합니다.
 * 5. 톱니바퀴 아이콘을 눌러 '웹 앱(Web App)'을 선택합니다.
 * 6. 설정:
 *    - 설명: (이름 자유 지정)
 *    - 웹 앱 실행자: '나'
 *    - 액세스 권한이 있는 사용자: '모든 사용자'
 * 7. '배포'를 클릭하고, 권한 검토에 동의합니다.
 * 8. 생성된 '웹 앱 URL(웹 앱 URL)'을 복사합니다.
 * 9. 프론트엔드 프로젝트의 `.env` 파일에 복사한 URL을 넣습니다.
 *    예: VITE_GOOGLE_SHEET_URL=https://script.google.com/macros/s/.../exec
 */

function doPost(e) {
  // CORS 문제 방지를 위해 헤더 추가
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // POST body 가져오기 (JSON 문자열)
    let postData = e.postData.contents;
    let data = JSON.parse(postData);
    
    let email = data.email || "no-email";
    let timestamp = new Date(); // 현재 시간

    // 시트의 마지막 줄 다음에 데이터 추가
    sheet.appendRow([timestamp, email]);

    return ContentService
      .createTextOutput(JSON.stringify({ "result": "success", "email": email }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders(headers);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ "result": "error", "message": error.toString() }))
      .setMimeType(ContentService.MimeType.JSON)
      .setHeaders(headers);
  }
}

// OPTIONS 요청 처리 (Preflight Request 대응)
function doOptions(e) {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };
  
  return ContentService.createTextOutput("")
    .setMimeType(ContentService.MimeType.TEXT)
    .setHeaders(headers);
}
