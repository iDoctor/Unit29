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
    if (window.sessionStorage.getItem("userAge") == null) {
        let input = prompt("����������, ������� ��� �������");
        window.sessionStorage.setItem("userAge", input);

        checker(true);
    } else {
        checker(false);
    }

    // ����� � �������
    logger();
    for (let result of session) {
        console.log(result);
    }
}

//�������� ��������
let checker = function (newVisit) {
    if (window.sessionStorage.getItem("userAge") >= 18) {
        // ������� �������� �� ������ ���������, ����� �� ���������� �����������
        // ������ ���
        if (newVisit) {
            alert("������������ �� LifeSpot! " + '\n' + "������� �����: " + new Date().toLocaleString());
        }
    }
    else {
        alert("���� ���������� �� ������������� ��� ��� ������ 18 ���. �� ������ ��������������");
        window.location.href = "http://www.google.com"
    }
}

function showTime(city, timeZone) {
    let time = document.getElementById(city);
    let h = new Date().getUTCHours();
    let m = new Date().getUTCMinutes();
    let s = new Date().getUTCSeconds();

    if (h + timeZone > 23 || h + timeZone < 0)
        h = Math.abs(h + timeZone - 24);
    else
        h = h + timeZone;
    if (h < 10)
        h = '0' + h;
    if (m < 10)
        m = '0' + m;
    if (s < 10)
        s = '0' + s;
    time.innerHTML = h + ":" + m + ":" + s;
}

//����� � �������
let logger = function () {
    console.log('������ ������: ' + window.sessionStorage.getItem("startDate"));
    console.log('������ �������: ' + window.sessionStorage.getItem("userAgent"));
    console.log('������� ������������: ' + window.sessionStorage.getItem("userAge"));
}