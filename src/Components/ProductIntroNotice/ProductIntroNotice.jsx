import React, { useState } from 'react';
import { Grid } from 'Components';
import NoticeItem from './NoticeItem/NoticeItem';
import styles from './ProductIntroNotice.module.css';
import { TableHeader, TableRow, Table } from 'Components';

const ProductIntroNotice = () => {
  const [noticeCount, setNoticeCount] = useState(0);
  const [inputs, setInputs] = useState({
    weight: '',
    origin: '',
    grade: '',
    keep: '',
    type: '',
  });

  const [notices, setNotices] = useState([
    {
      id: Math.random() * 100,
      title: '',
      text: '',
    },
  ]);

  const handleInput = event => {
    const { name, value } = event.target;
    const changeName = name.split('-')[1];
    if (value.length !== 0) {
      setInputs({
        ...inputs,
        [changeName]: value,
      });
    }
  };

  const handlePlusCount = () => {
    setNoticeCount(noticeCount + 1);
  };

  const handleAddItem = () => {
    setNotices(data =>
      data.concat({
        id: Math.random() * 100,
        title: '',
        text: '',
      })
    );
  };

  const handleItemDelete = id => {
    const list = [...notices];
    const index = notices.findIndex(item => item.id === id);
    list.splice(index, 1);
    setNotices(list);
  };

  const handleReset = () => {
    setInputs({
      weight: '',
      origin: '',
      grade: '',
      keep: '',
      type: '',
      title: '',
      text: '',
    });
  };

  return (
    <Table>
      <TableHeader> 상품 정보 고시</TableHeader>
      <TableRow className={styles.center}>
        <Grid container className={styles.gridInnerColor}>
          <Grid container className={styles.gridInner}>
            <Grid size={10} item>
              <h3>정보고시 {noticeCount >= 1 && noticeCount}</h3>
            </Grid>
            <Grid size={2} className={styles.rightBox} item>
              <button className={styles.deleteBtn} onClick={handleReset}>
                삭제
              </button>
            </Grid>
            <Grid size={4} className={styles.inputTitle} item>
              <span> 제품명 / 중량</span>
            </Grid>
            <Grid size={8} className={styles.inputBox} item>
              <input
                type="text"
                className={styles.input}
                aria-label="weight"
                placeholder="제품명 / 중량을 입력해주세요."
                onChange={handleInput}
                name="notice-weight"
                value={inputs.weight}
              />
            </Grid>
            <Grid size={4} className={styles.inputTitle} item>
              <span className={styles.inputTitle}>원산지 / 원재료 함량</span>
            </Grid>
            <Grid size={8} item>
              <input
                type="text"
                className={styles.input}
                aria-label="origin"
                placeholder="원산지 / 원재 함량을 입력해주세요."
                onChange={handleInput}
                name="notice-origin"
                value={inputs.origin}
              />
            </Grid>
            <Grid size={4} className={styles.inputTitle} item>
              <span className={styles.inputTitle}>등급</span>
            </Grid>
            <Grid size={8} item>
              <input
                type="text"
                className={styles.input}
                aria-label="grade"
                placeholder="등급(근내지방도 수치)를 입력해주세요."
                onChange={handleInput}
                name="notice-grade"
                value={inputs.grade}
              />
            </Grid>
            <Grid size={4} className={styles.inputTitle} item>
              <span className={styles.inputTitle}>보관</span>
            </Grid>
            <Grid size={8} item>
              <input
                type="text"
                className={styles.input}
                aria-label="keep"
                placeholder="보관 방식을 입력해주세요"
                onChange={handleInput}
                name="notice-keep"
                value={inputs.keep}

              />
            </Grid>
            <Grid size={4} item className={styles.inputTitle}>
              <span className={styles.inputTitle}>식품 유형</span>
            </Grid>
            <Grid size={8} item>
              <input
                type="text"
                className={styles.input}
                aria-label="type"
                placeholder="식품 유형을 입력해주세요.(ex) 포장육"
                onChange={handleInput}
                name="notice-type"
                value={inputs.type}
              />
            </Grid>
            <Grid size={12}>
              {notices.map((item, index) => (
                <NoticeItem key={index} id={item.id} onDelete={handleItemDelete} />
              ))}
            </Grid>
            <Grid size={3} className={styles.box} item>
              <button className={styles.plusBtn} onClick={handleAddItem}>
                + 항목추가
              </button>
            </Grid>
          </Grid>
          <Grid size={12}>
            <button type="button" className={styles.addBtn} onClick={handlePlusCount}>
              정보 고시 추가
            </button>
          </Grid>
        </Grid>
      </TableRow>
    </Table>
  );
};

export default ProductIntroNotice;
