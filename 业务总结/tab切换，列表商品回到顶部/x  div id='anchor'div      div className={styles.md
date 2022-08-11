```
 <div id='anchor'></div>
      <div className={styles.tab}>
        {
          tabs.map((item, index) => {
            return (
              <div
                key={item.tabKey}
                onClick={() => { this.tabClick(index) }}
                className={`${styles.tabItem} ${index === tabIndex ? styles.tabItem_active : ''}`}><Intl text={item.translateKey} /></div>
            )
          })
        }
      </div>
      <ProductList
        products={walletBills}
        is_loading={isLoading}
        load_more={canLoadMore}
        ready={isReady}
        scrollToEnd={loadmoreData}
        listEmptyComponent={() => <Empty text="No Data"/>}/>
```

js

```
 tabClick = (index) => {
    const anchor = document.getElementById('anchor');
    if (anchor) {
      const { top } = anchor.getBoundingClientRect()
      console.log('top', top)
      top < 0 && anchor.scrollIntoView();
    }
  }
```

