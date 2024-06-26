import React from 'react'
import style from './index.module.less'
import union from "../../icon/union.png";
import { useTranslation } from 'react-i18next';
export default function Agreement() {
  const { t } = useTranslation()
  return (
    <div className={style.agreeContainer}>
        <div className={style.privacyTop}>
            <img className={style.headerIcon} src={union} alt="" />
      </div>
       <header>
              <h2> {t('User Agreement')}</h2>
              <div className={style.updateDate}>{t('Update date: May 17, 2024')}</div>
        </header>
        <main>
          <section>
            <h4>{t('Welcome to Token 17')}</h4>
            <p> {t('Before you uses the services of this platform, please read the following terms carefully. If you object to any terms of this agreement, you can voluntarily stop using the services provided by Token 17. The users use of Token 17 services and data directly or indirectly through various methods (such as off-site API references, etc.) is deemed to have understood and fully agreed to the contents of this Service Agreement, including Token 17s changes to the Service Agreement at any time. any modifications.')}</p>
          </section>

          <section>
            <h4>{t('Usage rules')}</h4>
            <p>{t('1. After the user successfully registers, Token 17 will provide each user with a user account. The user should keep the Token 17 account and password properly.')}
              <br/>{t('2. During the use of Token 17 services, users shall bear full legal responsibility for any consequences arising from all activities and events conducted under their user accounts.')}
              <br/>{t('3. Users need to provide Token 17 with true, legal and valid registration information. Token 17 will not be responsible for any related problems caused by untrue registration information or untimely updates. Users are not allowed to impersonate others, are not allowed to register maliciously, and are not allowed to buy, sell or transfer Token 17 accounts. Otherwise, Token 17 has the right to immediately stop providing services, withdraw their accounts and the users shall bear all legal responsibilities arising therefrom.')}
              <br/> {t('4. Without the written permission of Token 17, no organization or individual may use any service or content of this platform for commercial purposes.')}
              <br/>{t('5. The users use of Token 17 services and data directly or indirectly through various methods (such as API calls, etc.) will be deemed to have unconditionally accepted the entire content of this agreement. If the user has objections to any terms of this agreement, please stop Use all services provided by Token 17.')}</p>
          </section>

          <section>
            <h4>{t('Service content')}</h4>
            <p>{t('1. The specific service content of Token 17 is provided by Token 17, including but not limited to information search, data query, data analysis, currency prices, data charts, news information, API plug-ins, etc. Token 17 has the right to provide services or Product form upgrades or other adjustments.')}
              <br/>{t('2. Some of the network services provided by Token 17 are paid network services. Users need to pay a certain fee to Token 17 before using paid network services. For paid network services, Token 17 will give users clear prompts before using them. Only Only after the user confirms his willingness to pay the relevant fees according to the prompts can he use the charged network service. If the user refuses to pay the relevant fees, Token 17 has the right not to provide such paid network services to the user.')}</p>
          </section>

          <section>
            <h4>{t('Service changes, interruptions or terminations')}</h4>
            <p>
              {t('1. In view of the particularity of network services (including but not limited to server stability issues, malicious network attacks and other circumstances beyond Token 17’s control), users agree that Token 17 has the right to change, interrupt or terminate part or all of the service at any time network services (including paid network services), if such a situation occurs, Token 17 does not bear any responsibility to any user or any third party.')}
              <br/>{t('2. Token 17 needs to regularly or irregularly inspect or maintain the Token 17 website or related equipment. If the service is interrupted within a reasonable time due to such circumstances, Token 17 does not need to bear any responsibility to any user or any third party. .')}
              <br/> {t('3. If the user provides untrue personal information, or the user violates laws, regulations, national policies or the usage rules stipulated in this agreement, or the user fails to pay relevant service fees as required when using paid services, or Token 17 has other reasonable reasons to believe that If it is necessary to interrupt or terminate the provision of services to users, Token 17 has the right to interrupt or terminate the provision of services (including paid services and free services) to users under this agreement at any time without assuming any liability to users or any third party. The losses shall be borne independently by the user.')}
            </p>
          </section>

          <section>
            <h4> {t('Copyright notice')}</h4>
            <p>{t('Token 17 is the owner and intellectual property owner of all services, content and products on the Token 17 platform. All services, content and products of the Token 17 platform include but are not limited to: program codes, data materials, page designs, accounts, pictures, charts, text, advertisements, trademarks, software, programs, audio, videos, etc. Without the written authorization or consent of Token 17 or the relevant rights holder, no media, website or individual may directly or indirectly publish, reproduce or otherwise use the above content. If authorized or agreed, it should be used within the scope of authorization or consent, and Indicate the source of data or services as Token 17.cc.')}</p>
          </section>

          <section>
            <h4>{t('Disclaimer')}</h4>
            <p>{t('1. Token 17 is not responsible for the authenticity, timeliness, accuracy, completeness or reliability of the content it provides, and does not guarantee the accuracy and completeness of external links set up to provide convenience to users. Token 17 does not assume any responsibility to the user or any third party for any loss caused by the direct or indirect use of the content of this website, and the resulting loss shall be borne independently by the user.')}
               <br/> {t('2. Token 17 does not assume any responsibility for service interruptions or other defects caused by force majeure or other reasons beyond Token 17’s control.')}
                <br/> {t('3. Users should abide by national laws, regulations and policies when using Token 17 services, and bear the consequences of their actions arising from their use of Token 17 services.')}</p>
          </section>

          <section>
            <h4>{t('Agreement modification')}</h4>
            <p>{t('Token 17 has the right to modify any terms of this agreement at any time. Once the content of this agreement changes, Token 17 will publish the revised agreement content on the website and make an announcement. If the user does not agree with the modifications made by Token 17 to the relevant terms of this agreement, the user may choose to stop using the services provided by Token 17. If the user continues to use the services provided by Token 17, the user will be deemed to have accepted the modifications made by Token 17 to the relevant terms of this agreement.')}</p>
          </section>

          <section>
            <h4>{t('Modifications to Privacy Policy')}</h4>
            <p>{t('In order to provide you with better services, we will modify and update the content of this policy from time to time. We will notify you through website announcements or other appropriate means before the updated version takes effect. If you do not agree to the changes, you can stop using Token 17s products and services. If you continue to use our products and services, you agree to be bound by them. Revised Privacy Policy.')}</p>
          </section>

          <section>
            <h4>{t('Contact US')}</h4>
            <p>{t('If you have any questions, comments or suggestions about this policy, you can contact us through the contact information provided on the Token 17 official website, or send an email tosupport@Token 17.com, we will process your request promptly.')}</p>
          </section>
        </main>
    </div>
  )
}
