/*
* ������� ��� ���������� ��������
* ����� ���������� ��������� �������� oninput �� index.html
*
* */
function filterContent() {

    // ��������� ����� ����������������� �������.
    let inputString = document.getElementsByTagName('input')[0].value.toLowerCase();
    // ������� ���������� � �����, ������� ���������� �����������
    let elements = document.getElementsByClassName('video-container');

    // ����������� �� �����������
    for (let i = 0; i <= elements.length; i++) {
        // ����������� ����� �������� �����, ������� ���������� �������������
        let videoText = elements[i].querySelector(".video-title").innerText;
        // ��������� ����������, ��������� �������� � ������ ��������
        if (!videoText.toLowerCase().includes(inputString.toLowerCase())) {
            // �������� ������������
            elements[i].style.display = 'none';
        } else {
            // ���������� ����������
            elements[i].style.display = 'inline-block';
        }
    }
}

/*
* ������� ��� �������� � ����������  ������ ������������
* ����� ��������� ������ � ����� �����, �� ������������� ���� �������
*
* */
function handleSession() {

    // �������� ������ Map ��� �������� ������
    let session = new Map();
    // �������� UserAgent
    session.set("userAgent", window.navigator.userAgent);

    // �������� ������� ������������ � ���� ��������
    session.set("age", prompt("����������, ������� ��� �������"));

    // �������� �� ������� � ���������� ������
    if (session.get("age") >= 18) {
        let startDate = new Date().toLocaleString();

        alert("������������ �� LifeSpot! " + '\n' + "������� �����: " + startDate);
        session.set("startDate", startDate);
    }
    else {
        alert("���� ���������� �� ������������� ��� ��� ������ 18 ���. �� ������ ��������������");
        window.location.href = "http://www.google.com";
    }
    // ����� � �������
    for (let result of session) {
        console.log(result);
    }
}